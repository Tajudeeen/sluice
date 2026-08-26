// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice TEST-ONLY malicious ERC20 used to prove SluiceGate's reentrancy guard.
///         When the gate calls transfer() to disburse funds (from == gate), this
///         token attempts to re-enter the gate (calling block() on a second, still
///         pending request). The gate's `nonReentrant` modifier must revert that
///         inner call. We catch the revert so the legitimate outer settlement still
///         completes: proving the guard prevents a second mutation while not
///         corrupting the primary settlement.
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SluiceGate} from "./SluiceGate.sol";

contract AttackToken is IERC20 {
    SluiceGate public gate;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    uint256 public totalSupply;
    uint256 public reentryTarget;
    bool public armed;
    uint256 public constant MAX_HOLDERS = type(uint256).max;

    constructor(SluiceGate gate_, uint256 reentryTarget_) {
        gate = gate_;
        reentryTarget = reentryTarget_;
        armed = true;
    }

    function setGate(SluiceGate gate_) external { gate = gate_; }

    function mint(address to, uint256 amt) external {
        balanceOf[to] += amt;
        totalSupply += amt;
    }
    function setReentryTarget(uint256 id) external { reentryTarget = id; }
    function disarm() external { armed = false; }

    function transfer(address to, uint256 amt) external returns (bool) {
        _move(msg.sender, to, amt);
        return true;
    }
    function transferFrom(address from, address to, uint256 amt) external returns (bool) {
        allowance[from][msg.sender] -= amt;
        _move(from, to, amt);
        return true;
    }
    function approve(address sp, uint256 amt) external returns (bool) {
        allowance[msg.sender][sp] = amt;
        return true;
    }
    function holderCount() external pure returns (uint256) { return 0; }
    function isTrackedHolder(address) external pure returns (bool) { return true; }

    function _move(address from, address to, uint256 amt) internal {
        balanceOf[from] -= amt;
        balanceOf[to] += amt;
        if (armed && from == address(gate)) {
            // Gate is disbursing (settle/refund). Attempt a re-entrant block().
            // The nonReentrant guard reverts this inner call; we swallow it so the
            // legitimate outer settlement completes.
            try gate.blockRequest(reentryTarget, _dummy()) {} catch {}
        }
    }

    function _dummy() internal view returns (SluiceGate.Attestation memory) {
        return SluiceGate.Attestation({
            requestId: reentryTarget,
            decision: SluiceGate.Decision.BLOCK,
            reasonCode: 0,
            aiClassification: 0,
            riskScore: 0,
            deterministicScore: 0,
            aiConfidence: 0,
            timestamp: 0,
            expiry: type(uint32).max,
            signature: hex""
        });
    }
}
