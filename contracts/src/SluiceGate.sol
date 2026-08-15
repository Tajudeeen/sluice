// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {AttesterRegistry} from "./AttesterRegistry.sol";

/// @title SluiceGate
/// @notice The on-chain execution firewall. Locks funds, emits a request event,
///         and only releases/refunds after an authorized attester submits a valid
///         EIP-712 attestation. The gate is the FINAL enforcement point: off-chain
///         data (including AI output) can never directly mutate contract state.
contract SluiceGate is ReentrancyGuard, EIP712 {
    // ---- Enums (also mirrored as uint8 in EIP-712) ----
    enum RequestType {TRANSFER, REDEMPTION}
    enum RequestStatus {PENDING, APPROVED, BLOCKED, TIMED_OUT}
    enum Decision {APPROVE, BLOCK}

    // Reason codes (informational; recorded on-chain, not enforced by the gate).
    enum ReasonCode {
        SAFE,                    // 0
        PROJECTED_CONCENTRATION, // 1
        POST_REDEMPTION_LIQUIDITY, // 2
        ANOMALY,                 // 3
        ANOMALY_CRITICAL,        // 4
        INSUFFICIENT_DATA,       // 5
        AI_REVIEW_BLOCK          // 6
    }

    // AI behavioral classifications (informational only).
    enum AiClassification {
        NORMAL,                    // 0
        COORDINATED_CLUSTER_SUSPECT, // 1
        WASH_TRADE_PATTERN_SUSPECT,  // 2
        UNUSUAL_ACTIVITY,          // 3
        INSUFFICIENT_DATA          // 4
    }

    struct PendingRequest {
        uint256 id;
        address requester;
        address recipient; // address(0) for redemption
        uint256 amount;
        RequestType requestType;
        uint256 createdAt;
        RequestStatus status;
    }

    /// @notice The structured decision the attester signs. The signature field is
    ///         supplied separately and is NOT part of the signed payload.
    struct Attestation {
        uint256 requestId;
        Decision decision;
        uint8 reasonCode; // ReasonCode as uint8
        uint8 aiClassification; // AiClassification as uint8
        uint32 riskScore; // 0-100 overall deterministic
        uint32 deterministicScore; // 0-100
        uint32 aiConfidence; // 0-100 (percent)
        uint32 timestamp;
        uint32 expiry;
        bytes signature; // 65-byte sig, NOT signed (passed alongside)
    }

    IERC20 public immutable asset;
    AttesterRegistry public immutable registry;
    uint256 public immutable timeout;

    uint256 public requestCounter;
    mapping(uint256 => PendingRequest) private _requests;
    mapping(bytes32 => bool) private _usedAttestation;

    // ---- Errors ----
    error ZeroAddress();
    error ZeroAmount();
    error NotPending();
    error NotAttester();
    error Expired();
    error FutureTimestamp();
    error InvalidSignature();
    error WrongRequestId();
    error AlreadyUsed();
    error WrongDecision();
    error SelfTransfer();
    error InsufficientAllowance();
    error NoSuchRequest();

    // ---- Events ----
    event RequestCreated(
        uint256 indexed id,
        address indexed requester,
        address indexed recipient,
        uint256 amount,
        RequestType requestType
    );
    event RequestApproved(uint256 indexed id, address indexed recipient, uint256 amount);
    event RequestBlocked(uint256 indexed id, address indexed requester, uint256 amount);
    event RequestTimedOut(uint256 indexed id, address indexed requester, uint256 amount);
    event AttestationUsed(bytes32 indexed digest);

    bytes32 private constant _ATTESTATION_TYPEHASH = keccak256(
        "Attestation(uint256 requestId,uint8 decision,uint8 reasonCode,uint8 aiClassification,uint32 riskScore,uint32 deterministicScore,uint32 aiConfidence,uint32 timestamp,uint32 expiry)"
    );

    constructor(address asset_, address registry_, uint256 timeout_) EIP712("SluiceGate", "1") {
        if (asset_ == address(0) || registry_ == address(0)) revert ZeroAddress();
        asset = IERC20(asset_);
        registry = AttesterRegistry(registry_);
        timeout = timeout_ == 0 ? 1 hours : timeout_;
    }

    // ------------------------------------------------------------------
    // Request lifecycle
    // ------------------------------------------------------------------

    /// @notice Lock funds for a transfer and open a pending request.
    function requestTransfer(address to, uint256 amount) external nonReentrant returns (uint256 id) {
        if (to == address(0)) revert ZeroAddress();
        if (to == msg.sender) revert SelfTransfer();
        if (amount == 0) revert ZeroAmount();
        _lock(msg.sender, amount);
        id = _open(msg.sender, to, amount, RequestType.TRANSFER);
    }

    /// @notice Lock funds for a redemption (retires supply) and open a pending request.
    function requestRedeem(uint256 amount) external nonReentrant returns (uint256 id) {
        if (amount == 0) revert ZeroAmount();
        _lock(msg.sender, amount);
        id = _open(msg.sender, address(0), amount, RequestType.REDEMPTION);
    }

    function _lock(address from, uint256 amount) private {
        if (asset.allowance(from, address(this)) < amount) revert InsufficientAllowance();
        // Checks-effects: state is set in _open after this pull. ReentrancyGuard +
        // our own token make this safe; pull happens before state mutation of the
        // request, and the request is created immediately after.
        bool ok = asset.transferFrom(from, address(this), amount);
        require(ok, "transferFrom failed");
    }

    function _open(
        address requester,
        address recipient,
        uint256 amount,
        RequestType rtype
    ) private returns (uint256 id) {
        id = ++requestCounter;
        _requests[id] = PendingRequest({
            id: id,
            requester: requester,
            recipient: recipient,
            amount: amount,
            requestType: rtype,
            createdAt: block.timestamp,
            status: RequestStatus.PENDING
        });
        emit RequestCreated(id, requester, recipient, amount, rtype);
    }

    // ------------------------------------------------------------------
    // Settlement (authorized attester only, via valid attestation)
    // ------------------------------------------------------------------

    function approve(uint256 requestId, Attestation calldata att)
        external
        nonReentrant
    {
        PendingRequest storage req = _verify(requestId, att, Decision.APPROVE);
        req.status = RequestStatus.APPROVED; // effects before interaction
        if (req.requestType == RequestType.TRANSFER) {
            bool ok = asset.transfer(req.recipient, req.amount);
            require(ok, "transfer failed");
            emit RequestApproved(requestId, req.recipient, req.amount);
        } else {
            // Redemption: retire the locked supply (reduces pool liquidity).
            // SluiceAsset.burn is gated to the gate.
            (bool ok, ) = address(asset).call(
                abi.encodeWithSignature("burn(uint256)", req.amount)
            );
            require(ok, "burn failed");
            emit RequestApproved(requestId, address(0), req.amount);
        }
    }

    function blockRequest(uint256 requestId, Attestation calldata att)
        external
        nonReentrant
    {
        PendingRequest storage req = _verify(requestId, att, Decision.BLOCK);
        req.status = RequestStatus.BLOCKED; // effects before interaction
        bool ok = asset.transfer(req.requester, req.amount);
        require(ok, "refund failed");
        emit RequestBlocked(requestId, req.requester, req.amount);
    }

    /// @notice Anyone may release funds if the agent is unavailable past timeout.
    function timeoutRelease(uint256 requestId) external nonReentrant {
        PendingRequest storage req = _requests[requestId];
        if (req.createdAt == 0) revert NoSuchRequest(); // request was never created
        if (req.status != RequestStatus.PENDING) revert NotPending();
        if (block.timestamp < req.createdAt + timeout) revert Expired();
        req.status = RequestStatus.TIMED_OUT;
        bool ok = asset.transfer(req.requester, req.amount);
        require(ok, "refund failed");
        emit RequestTimedOut(requestId, req.requester, req.amount);
    }

    // ------------------------------------------------------------------
    // Attestation verification (the gate is the final enforcement point)
    // ------------------------------------------------------------------

    function _verify(uint256 requestId, Attestation calldata att, Decision want)
        private
        returns (PendingRequest storage req)
    {
        req = _requests[requestId];
        if (req.createdAt == 0) revert NoSuchRequest(); // request was never created
        if (req.status != RequestStatus.PENDING) revert NotPending();
        if (att.requestId != requestId) revert WrongRequestId();
        if (att.decision != want) revert WrongDecision();
        if (att.timestamp > block.timestamp) revert FutureTimestamp();
        if (att.expiry < block.timestamp) revert Expired();

        bytes32 structHash = keccak256(
            abi.encode(
                _ATTESTATION_TYPEHASH,
                att.requestId,
                att.decision,
                att.reasonCode,
                att.aiClassification,
                att.riskScore,
                att.deterministicScore,
                att.aiConfidence,
                att.timestamp,
                att.expiry
            )
        );
        bytes32 digest = _hashTypedDataV4(structHash);
        if (_usedAttestation[digest]) revert AlreadyUsed();

        address signer = ECDSA.recover(digest, att.signature);
        if (!registry.isAttester(signer)) revert NotAttester();
        if (signer == address(0)) revert InvalidSignature();

        _usedAttestation[digest] = true;
        emit AttestationUsed(digest);
    }

    // ------------------------------------------------------------------
    // Views
    // ------------------------------------------------------------------

    function getRequest(uint256 id) external view returns (PendingRequest memory) {
        return _requests[id];
    }

    function isUsedAttestation(bytes32 digest) external view returns (bool) {
        return _usedAttestation[digest];
    }
}
