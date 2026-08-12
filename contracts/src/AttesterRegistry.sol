// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title AttesterRegistry
/// @notice Minimal registry of authorized attesters for Sluice v1.
/// @dev Sluice v1 uses a SINGLE authorized attester. This registry exists so the
///      upgrade path to N-of-M attester quorum is a small, isolated change and does
///      NOT represent a decentralized guardian consensus. It is owner-controlled.
contract AttesterRegistry {
    address public immutable owner;
    mapping(address => bool) private _attesters;

    event AttesterAdded(address indexed attester);
    event AttesterRemoved(address indexed attester);

    error NotOwner();
    error ZeroAddress();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor(address initialAttester) {
        if (initialAttester == address(0)) revert ZeroAddress();
        owner = msg.sender;
        _attesters[initialAttester] = true;
        emit AttesterAdded(initialAttester);
    }

    function addAttester(address attester) external onlyOwner {
        if (attester == address(0)) revert ZeroAddress();
        _attesters[attester] = true;
        emit AttesterAdded(attester);
    }

    function removeAttester(address attester) external onlyOwner {
        if (attester == address(0)) revert ZeroAddress();
        _attesters[attester] = false;
        emit AttesterRemoved(attester);
    }

    function isAttester(address attester) external view returns (bool) {
        return _attesters[attester];
    }
}
