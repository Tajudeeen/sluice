// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";

/// @title AttesterRegistry
/// @notice Minimal registry of authorized attesters for Sluice v1.
/// @dev Sluice v1 uses a SINGLE authorized attester. Control is two-step so a
///      production deployment can hand registry administration to a multisig.
contract AttesterRegistry is Ownable2Step {
    mapping(address => bool) private _attesters;
    uint256 public attesterCount;

    event AttesterAdded(address indexed attester);
    event AttesterRemoved(address indexed attester);

    error ZeroAddress();
    error AttesterAlreadyAdded();
    error AttesterNotFound();
    error LastAttester();

    constructor(address initialAttester) Ownable(msg.sender) {
        if (initialAttester == address(0)) revert ZeroAddress();
        _attesters[initialAttester] = true;
        attesterCount = 1;
        emit AttesterAdded(initialAttester);
    }

    function addAttester(address attester) external onlyOwner {
        if (attester == address(0)) revert ZeroAddress();
        if (_attesters[attester]) revert AttesterAlreadyAdded();
        _attesters[attester] = true;
        attesterCount += 1;
        emit AttesterAdded(attester);
    }

    function removeAttester(address attester) external onlyOwner {
        if (attester == address(0)) revert ZeroAddress();
        if (!_attesters[attester]) revert AttesterNotFound();
        if (attesterCount == 1) revert LastAttester();
        _attesters[attester] = false;
        attesterCount -= 1;
        emit AttesterRemoved(attester);
    }

    function isAttester(address attester) external view returns (bool) {
        return _attesters[attester];
    }
}
