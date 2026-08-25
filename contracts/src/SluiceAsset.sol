// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @title SluiceAsset
/// @notice Synthetic demo token "SLUSD" (Sluice Liquidity Unit).
/// @dev This asset is SYNTHETIC. It does not represent custody of any real-world asset.
///      Token movement is gated: transfers only occur through the authorized SluiceGate.
///      Direct ERC-20 transfers are rejected, so there is no bypass path around the firewall.
contract SluiceAsset is ERC20, ERC20Burnable, Ownable {
    address public gate;

    // Lightweight holder tracking so the off-chain risk engine can read the
    // authoritative holder set. Zero-balance addresses remain in the set as
    // "inactive" entries and are skipped when computing concentration.
    address[] private _holderList;
    mapping(address => bool) private _isHolder;

    error GateNotSet();
    error GateAlreadySet();
    error OnlyGate();
    error ZeroAddress();
    error FaucetAlreadyClaimed();
    error FaucetCapReached();

    event GateSet(address indexed gate);

    constructor(
        string memory name_,
        string memory symbol_,
        address initialAttester
    ) ERC20(name_, symbol_) Ownable(msg.sender) {
        // initialAttester is unused here but kept for deploy symmetry; the
        // deploy script wires the registry separately.
        require(initialAttester != address(0), "zero attester");
    }

    /// @notice Owner configures the single authorized gate once. Making this
    ///         immutable after setup prevents pending escrow from being stranded
    ///         in an old gate after an unsafe rotation.
    function setGate(address gate_) external onlyOwner {
        if (gate_ == address(0)) revert ZeroAddress();
        if (gate != address(0)) revert GateAlreadySet();
        gate = gate_;
        emit GateSet(gate_);
    }

    /// @notice Owner mints (used once at deploy to seed the demo distribution).
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /// @dev Enforce: only the gate can move tokens between live accounts.
    ///      Mint (from == 0) and burn (to == 0) are permitted; burn must be
    ///      initiated by the gate (checked via `onlyGate`-equivalent guard below).
    function _update(address from, address to, uint256 value) internal override {
        if (from != address(0) && to != address(0)) {
            // A live transfer: only the gate may perform it.
            if (msg.sender != gate) revert OnlyGate();
        }
        super._update(from, to, value);

        if (from != address(0)) _track(from);
        if (to != address(0)) _track(to);
    }

    /// @dev Burn must come from the gate (escrow) only. ERC20Burnable.burn
    ///      burns msg.sender's balance; the gate holds the locked escrow.
    function burn(uint256 value) public override onlyGate {
        super.burn(value);
    }

    /// @dev The inherited allowance-based burn path must obey the same
    ///      gate-only invariant as burn().
    function burnFrom(address account, uint256 value) public override onlyGate {
        super.burnFrom(account, value);
    }

    modifier onlyGate() {
        if (msg.sender != gate) revert OnlyGate();
        _;
    }

    function _track(address who) private {
        if (!_isHolder[who]) {
            _isHolder[who] = true;
            _holderList.push(who);
        }
    }

    /// @notice Returns the tracked holder set (may include zero-balance entries).
    function holders() external view returns (address[] memory) {
        return _holderList;
    }

    function holderCount() external view returns (uint256) {
        return _holderList.length;
    }

    /// @notice Demo faucet: owner mints a small amount to the caller so a
    ///         browser user can actually drive the real request → settle loop.
    ///         SYNTHETIC DEMO ONLY. There is no real-world value and no mainnet
    ///         faucet claimable by the public; this exists purely to make the
    ///         demo flow reachable end-to-end without a pre-seeded recipient.
    /// @dev One claim per address plus a global cap keeps the synthetic demo
    ///      distribution bounded and prevents holder-list growth attacks.
    uint256 public constant FAUCET_AMOUNT = 50_000e18;
    uint256 public constant FAUCET_CAP = 300_000e18;
    uint256 public faucetMinted;
    mapping(address => bool) public faucetClaimed;

    function faucet() external {
        if (faucetClaimed[msg.sender]) revert FaucetAlreadyClaimed();
        if (faucetMinted + FAUCET_AMOUNT > FAUCET_CAP) revert FaucetCapReached();
        faucetClaimed[msg.sender] = true;
        faucetMinted += FAUCET_AMOUNT;
        _mint(msg.sender, FAUCET_AMOUNT);
    }
}
