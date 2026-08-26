require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");
const { ethers } = require("hardhat");
const { expect } = require("chai");
const { loadFixture, time } = require("@nomicfoundation/hardhat-network-helpers");

const HOUR = 3600;

// Reason/AI numeric mirrors (see SluiceGate.sol enums)
const RC = { SAFE: 0, PROJECTED_CONCENTRATION: 1, POST_REDEMPTION_LIQUIDITY: 2, ANOMALY: 3, ANOMALY_CRITICAL: 4, INSUFFICIENT_DATA: 5, AI_REVIEW_BLOCK: 6 };
const AI = { NORMAL: 0, COORDINATED: 1, WASH: 2, UNUSUAL: 3, INSUFFICIENT: 4 };

async function deployFixture() {
  const [deployer, attester, alice, bob, carol, dave, eve, stranger] =
    await ethers.getSigners();

  const Registry = await ethers.getContractFactory("AttesterRegistry");
  const registry = await Registry.deploy(attester.address);

  const Asset = await ethers.getContractFactory("SluiceAsset");
  const asset = await Asset.deploy("Sluice Liquidity Unit", "SLUSD", attester.address);

  const TOTAL = ethers.parseUnits("1000000", 18);
  // Intentionally uneven demo distribution.
  await asset.mint(alice.address, ethers.parseUnits("350000", 18));
  await asset.mint(bob.address, ethers.parseUnits("250000", 18));
  await asset.mint(carol.address, ethers.parseUnits("150000", 18));
  await asset.mint(dave.address, ethers.parseUnits("100000", 18));
  await asset.mint(eve.address, ethers.parseUnits("50000", 18));
  await asset.mint(stranger.address, ethers.parseUnits("100000", 18));

  const Gate = await ethers.getContractFactory("SluiceGate");
  const gate = await Gate.deploy(await asset.getAddress(), await registry.getAddress(), HOUR);

  await asset.setGate(await gate.getAddress());

  return { deployer, attester, alice, bob, carol, dave, eve, stranger, registry, asset, gate, TOTAL };
}

// Build a valid EIP-712 attestation signed by `attester`.
async function makeAttestation(gate, attester, requestId, decision, overrides) {
  overrides = overrides || {};
  // Use the chain clock that SluiceGate validates against. Wall-clock time can
  // differ from Hardhat's block timestamp and make expiry tests flaky.
  const latestBlock = await gate.runner.provider.getBlock("latest");
  const now = Number(latestBlock.timestamp);
  const ts = overrides.timestamp != null ? overrides.timestamp : now;
  const exp = overrides.expiry != null ? overrides.expiry : now + 600;
  const net = await gate.runner.provider.getNetwork();
  const domain = {
    name: "SluiceGate",
    version: "1",
    chainId: net.chainId,
    verifyingContract: await gate.getAddress(),
  };
  const types = {
    Attestation: [
      { name: "requestId", type: "uint256" },
      { name: "decision", type: "uint8" },
      { name: "reasonCode", type: "uint8" },
      { name: "aiClassification", type: "uint8" },
      { name: "riskScore", type: "uint32" },
      { name: "deterministicScore", type: "uint32" },
      { name: "aiConfidence", type: "uint32" },
      { name: "timestamp", type: "uint32" },
      { name: "expiry", type: "uint32" },
    ],
  };
  const value = {
    requestId: requestId,
    decision: decision,
    reasonCode: overrides.reasonCode != null ? overrides.reasonCode : RC.SAFE,
    aiClassification: overrides.aiClassification != null ? overrides.aiClassification : AI.NORMAL,
    riskScore: overrides.riskScore != null ? overrides.riskScore : 10,
    deterministicScore: overrides.deterministicScore != null ? overrides.deterministicScore : 10,
    aiConfidence: overrides.aiConfidence != null ? overrides.aiConfidence : 90,
    timestamp: ts,
    expiry: exp,
  };
  const sig = await attester.signTypedData(domain, types, value);
  return {
    requestId: requestId,
    decision: decision,
    reasonCode: value.reasonCode,
    aiClassification: value.aiClassification,
    riskScore: value.riskScore,
    deterministicScore: value.deterministicScore,
    aiConfidence: value.aiConfidence,
    timestamp: value.timestamp,
    expiry: value.expiry,
    signature: sig,
  };
}

describe("SluiceAsset", () => {
  it("mints the demo distribution to 1,000,000 SLUSD and tracks holders", async () => {
    const { asset, alice, TOTAL } = await loadFixture(deployFixture);
    expect(await asset.totalSupply()).to.equal(TOTAL);
    expect(await asset.balanceOf(alice.address)).to.equal(ethers.parseUnits("350000", 18));
    expect(await asset.holderCount()).to.be.greaterThan(0);
    expect(await asset.holderAt(0)).to.equal(alice.address);
    expect(await asset.MAX_HOLDERS()).to.equal(256n);
    expect(await asset.isTrackedHolder(alice.address)).to.equal(true);
  });

  it("caps holder growth and rejects new-recipient requests before escrow", async () => {
    const { asset, gate, alice, bob, deployer } = await loadFixture(deployFixture);
    const one = ethers.parseUnits("1", 18);

    await asset.connect(alice).approve(await gate.getAddress(), one * 2n);
    await gate.connect(alice).requestTransfer(bob.address, one); // tracks the gate

    const current = Number(await asset.holderCount());
    const cap = Number(await asset.MAX_HOLDERS());
    for (let i = current; i < cap; i++) {
      const address = ethers.getAddress(ethers.zeroPadValue(ethers.toBeHex(10_000 + i), 20));
      await asset.connect(deployer).mint(address, one);
    }

    const fresh = "0x1111111111111111111111111111111111111111";
    await expect(asset.connect(deployer).mint(fresh, one))
      .to.be.revertedWithCustomError(asset, "HolderCapReached");
    await expect(gate.connect(alice).requestTransfer(fresh, one))
      .to.be.revertedWithCustomError(gate, "HolderCapReached");
  });

  it("blocks direct ERC-20 transfers (no bypass around the gate)", async () => {
    const { asset, alice, bob } = await loadFixture(deployFixture);
    await expect(
      asset.connect(alice).transfer(bob.address, ethers.parseUnits("1", 18))
    ).to.be.revertedWithCustomError(asset, "OnlyGate");
  });

  it("blocks direct transferFrom (no bypass around the gate)", async () => {
    const { asset, alice, bob } = await loadFixture(deployFixture);
    await asset.connect(alice).approve(bob.address, ethers.parseUnits("1", 18));
    await expect(
      asset.connect(bob).transferFrom(alice.address, bob.address, ethers.parseUnits("1", 18))
    ).to.be.revertedWithCustomError(asset, "OnlyGate");
  });

  it("blocks allowance-based burnFrom by a non-gate spender", async () => {
    const { asset, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("10", 18);
    await asset.connect(alice).approve(bob.address, amt);
    await expect(asset.connect(bob).burnFrom(alice.address, amt))
      .to.be.revertedWithCustomError(asset, "OnlyGate");
  });

  it("prevents gate rotation after initial setup", async () => {
    const { asset, stranger } = await loadFixture(deployFixture);
    await expect(asset.setGate(stranger.address))
      .to.be.revertedWithCustomError(asset, "GateAlreadySet");
  });

  it("supports two-step transfer of mint administration to a multisig", async () => {
    const { asset, deployer, stranger } = await loadFixture(deployFixture);
    await asset.connect(deployer).transferOwnership(stranger.address);
    expect(await asset.pendingOwner()).to.equal(stranger.address);
    await asset.connect(stranger).acceptOwnership();
    expect(await asset.owner()).to.equal(stranger.address);
  });

  it("allows the gate to move tokens", async () => {
    const { asset, gate, alice, bob } = await loadFixture(deployFixture);
    await asset.connect(alice).approve(await gate.getAddress(), ethers.parseUnits("100", 18));
    await gate.connect(alice).requestTransfer(bob.address, ethers.parseUnits("100", 18));
    expect(await asset.balanceOf(await gate.getAddress())).to.equal(ethers.parseUnits("100", 18));
  });

  it("limits the synthetic faucet to one claim per address and a global cap", async () => {
    const { asset, alice, bob, carol, dave, eve, stranger } = await loadFixture(deployFixture);
    await expect(asset.connect(alice).faucet()).to.emit(asset, "Transfer");
    await expect(asset.connect(alice).faucet()).to.be.revertedWithCustomError(asset, "FaucetAlreadyClaimed");
    await asset.connect(bob).faucet();
    await asset.connect(carol).faucet();
    await asset.connect(dave).faucet();
    await asset.connect(eve).faucet();
    await asset.connect(stranger).faucet();
    expect(await asset.faucetMinted()).to.equal(ethers.parseUnits("300000", 18));
    const extra = (await ethers.getSigners())[8];
    await expect(asset.connect(extra).faucet()).to.be.revertedWithCustomError(asset, "FaucetCapReached");
  });
});

describe("SluiceGate - request lifecycle", () => {
  it("requestTransfer locks funds and opens a PENDING request", async () => {
    const { asset, gate, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    const before = await asset.balanceOf(alice.address);
    await expect(gate.connect(alice).requestTransfer(bob.address, amt))
      .to.emit(gate, "RequestCreated");
    expect(await asset.balanceOf(alice.address)).to.equal(before - amt);
    expect(await asset.balanceOf(await gate.getAddress())).to.equal(amt);
    const req = await gate.getRequest(1);
    expect(req.status).to.equal(0); // PENDING
    expect(req.requester).to.equal(alice.address);
    expect(req.recipient).to.equal(bob.address);
    expect(req.requestType).to.equal(0); // TRANSFER
  });

  it("requestRedeem locks funds with recipient = zero address", async () => {
    const { asset, gate, alice } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("50", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestRedeem(amt);
    const req = await gate.getRequest(1);
    expect(req.requestType).to.equal(1); // REDEMPTION
    expect(req.recipient).to.equal(ethers.ZeroAddress);
    expect(await asset.balanceOf(await gate.getAddress())).to.equal(amt);
  });

  it("reverts when allowance is insufficient", async () => {
    const { gate, alice, bob } = await loadFixture(deployFixture);
    await expect(
      gate.connect(alice).requestTransfer(bob.address, ethers.parseUnits("100", 18))
    ).to.be.revertedWithCustomError(gate, "InsufficientAllowance");
  });

  it("rejects self transfer", async () => {
    const { asset, gate, alice } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("1", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await expect(gate.connect(alice).requestTransfer(alice.address, amt))
      .to.be.revertedWithCustomError(gate, "SelfTransfer");
  });
});

describe("SluiceGate - settlement (authorization + attestation)", () => {
  it("approve releases funds to recipient (TRANSFER)", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0);
    await expect(gate.connect(attester).approve(1, att))
      .to.emit(gate, "RequestApproved");
    expect(await asset.balanceOf(bob.address)).to.equal(ethers.parseUnits("250100", 18)); // 250k + 100
    expect(await asset.balanceOf(await gate.getAddress())).to.equal(0);
    expect((await gate.getRequest(1)).status).to.equal(1); // APPROVED
  });

  it("approve retires supply on REDEMPTION (liquidity drops)", async () => {
    const { asset, gate, attester, alice } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("50", 18);
    const supplyBefore = await asset.totalSupply();
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestRedeem(amt);
    const att = await makeAttestation(gate, attester, 1n, 0);
    await gate.connect(attester).approve(1, att);
    expect(await asset.totalSupply()).to.equal(supplyBefore - amt);
    expect(await asset.balanceOf(await gate.getAddress())).to.equal(0);
  });

  it("block refunds funds to requester", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const before = await asset.balanceOf(alice.address);
    const att = await makeAttestation(gate, attester, 1n, 1, { reasonCode: RC.PROJECTED_CONCENTRATION });
    await expect(gate.connect(attester).blockRequest(1, att)).to.emit(gate, "RequestBlocked");
    expect(await asset.balanceOf(alice.address)).to.equal(before + amt);
    expect((await gate.getRequest(1)).status).to.equal(2); // BLOCKED
  });

  it("unauthorized address cannot approve", async () => {
    const { asset, gate, alice, bob, stranger } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, stranger, 1n, 0); // signed by stranger (not attester)
    await expect(gate.connect(stranger).approve(1, att))
      .to.be.revertedWithCustomError(gate, "NotAttester");
  });

  it("unauthorized address cannot block", async () => {
    const { asset, gate, alice, bob, stranger } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, stranger, 1n, 1);
    await expect(gate.connect(stranger).blockRequest(1, att))
      .to.be.revertedWithCustomError(gate, "NotAttester");
  });

  it("request cannot be settled twice", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0);
    await gate.connect(attester).approve(1, att);
    const att2 = await makeAttestation(gate, attester, 1n, 1); // reuse same id, different decision
    await expect(gate.connect(attester).blockRequest(1, att2))
      .to.be.revertedWithCustomError(gate, "NotPending");
  });

  it("rejects an invalid (garbage) signature", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0);
    att.signature = "0x" + "11".repeat(65); // wrong sig -> ECDSA recovery fails
    await expect(gate.connect(attester).approve(1, att))
      .to.be.reverted;
  });

  it("rejects an expired attestation", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const latest = await ethers.provider.getBlock("latest");
    const att = await makeAttestation(gate, attester, 1n, 0, { expiry: Number(latest.timestamp) - 10 });
    await expect(gate.connect(attester).approve(1, att))
      .to.be.revertedWithCustomError(gate, "Expired");
  });

  it("rejects a future timestamp", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0, { timestamp: Math.floor(Date.now() / 1000) + 1000 });
    await expect(gate.connect(attester).approve(1, att))
      .to.be.revertedWithCustomError(gate, "FutureTimestamp");
  });

  it("rejects a wrong requestId", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 999n, 0);
    await expect(gate.connect(attester).approve(999, att))
      .to.be.revertedWithCustomError(gate, "NoSuchRequest");
  });

  it("rejects approve() given a BLOCK attestation (wrong decision)", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 1);
    await expect(gate.connect(attester).approve(1, att))
      .to.be.revertedWithCustomError(gate, "WrongDecision");
  });

  it("rejects malformed attestation score and enum fields", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("1", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0, { riskScore: 101 });
    await expect(gate.connect(attester).approve(1, att))
      .to.be.revertedWithCustomError(gate, "InvalidAttestationFields");
  });

  it("prevents replay of the same attestation (no double settlement)", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0);
    // settle once
    await gate.connect(attester).approve(1, att);
    // re-submitting the identical attestation for the same request must be rejected
    await expect(gate.connect(attester).approve(1, att))
      .to.be.revertedWithCustomError(gate, "NotPending");
  });

  it("reentrancy-protected: malicious token reentering block() during settlement is blocked", async () => {
    const { attester, alice, bob, carol } = await loadFixture(deployFixture);
    const Registry = await ethers.getContractFactory("AttesterRegistry");
    const registry = await Registry.deploy(attester.address);
    const Attack = await ethers.getContractFactory("AttackToken");
    const atk = await Attack.deploy(ethers.ZeroAddress, 2n); // gate set after gate deploy
    const Gate = await ethers.getContractFactory("SluiceGate");
    const gate = await Gate.deploy(await atk.getAddress(), await registry.getAddress(), HOUR);
    await atk.setGate(await gate.getAddress()); // will reenter blockRequest(2)

    const amt = ethers.parseUnits("100", 18);
    await atk.mint(await alice.getAddress(), amt * 4n);
    await atk.connect(alice).approve(await gate.getAddress(), amt * 4n);

    // Open two requests. Request 1 is the one being settled; request 2 stays pending
    // and is the reentrancy target.
    await gate.connect(alice).requestTransfer(await bob.getAddress(), amt); // id 1
    await gate.connect(alice).requestTransfer(await carol.getAddress(), amt); // id 2 (pending)

    // Settle request 1. During the gate's disbursement transfer(), AttackToken
    // tries to re-enter blockRequest(2). The nonReentrant guard must revert that
    // inner call (caught by the token), so the legitimate settle of request 1
    // completes while request 2 remains untouched.
    const attA = await makeAttestation(gate, attester, 1n, 0);
    await gate.connect(attester).approve(1, attA);

    expect((await gate.getRequest(1)).status).to.equal(1); // APPROVED
    expect((await gate.getRequest(2)).status).to.equal(0); // still PENDING (not re-settled)
    expect(await atk.balanceOf(await bob.getAddress())).to.equal(amt); // request 1 disbursed
  });
});

describe("SluiceGate - timeout", () => {
  it("refunds funds after timeout when agent is unavailable", async () => {
    const { asset, gate, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    const before = await asset.balanceOf(alice.address);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    // before timeout, must revert
    await expect(gate.connect(bob).timeoutRelease(1))
      .to.be.revertedWithCustomError(gate, "Expired");
    await time.increase(HOUR + 1);
    await expect(gate.connect(bob).timeoutRelease(1)).to.emit(gate, "RequestTimedOut");
    expect(await asset.balanceOf(alice.address)).to.equal(before);
    expect((await gate.getRequest(1)).status).to.equal(3); // TIMED_OUT
  });

  it("cannot timeout a non-pending request", async () => {
    const { asset, gate, attester, alice, bob } = await loadFixture(deployFixture);
    const amt = ethers.parseUnits("100", 18);
    await asset.connect(alice).approve(await gate.getAddress(), amt);
    await gate.connect(alice).requestTransfer(bob.address, amt);
    const att = await makeAttestation(gate, attester, 1n, 0);
    await gate.connect(attester).approve(1, att);
    await time.increase(HOUR + 1);
    await expect(gate.connect(bob).timeoutRelease(1))
      .to.be.revertedWithCustomError(gate, "NotPending");
  });
});

describe("AttesterRegistry", () => {
  it("owner can add/remove an attester; non-owner cannot", async () => {
    const { registry, deployer, attester, stranger } = await loadFixture(deployFixture);
    expect(await registry.isAttester(attester.address)).to.equal(true);
    await expect(registry.connect(stranger).addAttester(stranger.address))
      .to.be.revertedWithCustomError(registry, "OwnableUnauthorizedAccount");
    await registry.connect(deployer).addAttester(stranger.address);
    expect(await registry.isAttester(stranger.address)).to.equal(true);
    await registry.connect(deployer).removeAttester(stranger.address);
    expect(await registry.isAttester(stranger.address)).to.equal(false);
    expect(await registry.attesterCount()).to.equal(1);
    await expect(registry.connect(deployer).removeAttester(attester.address))
      .to.be.revertedWithCustomError(registry, "LastAttester");
  });

  it("supports two-step transfer of registry control to a multisig", async () => {
    const { registry, deployer, stranger } = await loadFixture(deployFixture);
    await registry.connect(deployer).transferOwnership(stranger.address);
    expect(await registry.pendingOwner()).to.equal(stranger.address);
    await registry.connect(stranger).acceptOwnership();
    expect(await registry.owner()).to.equal(stranger.address);
  });
});
