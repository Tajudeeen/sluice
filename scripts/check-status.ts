const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

function loadGate() {
  for (const name of ["deployment.localhost.json", "deployment.hardhat.json"]) {
    const p = path.join(__dirname, "..", "artifacts", name);
    if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, "utf8")).gate;
  }
  return "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584";
}
const RPC = "http://127.0.0.1:8545";
const GATE = loadGate();
const GATE_ABI = [
  "function getRequest(uint256 id) view returns (tuple(uint256 id, address requester, address recipient, uint256 amount, uint8 requestType, uint256 createdAt, uint8 status))",
  "function requestCounter() view returns (uint256)",
];
(async () => {
  const p = new ethers.JsonRpcProvider(RPC);
  const g = new ethers.Contract(GATE, GATE_ABI, p);
  const n = Number(await g.requestCounter());
  console.log(`Request counter = ${n}`);
  for (let id = 1; id <= n; id++) {
    const r = await g.getRequest(id);
    const st = ["PENDING", "APPROVED", "BLOCKED", "TIMED_OUT"][Number(r.status)];
    console.log(`  #${id} type=${r.requestType == 0 ? "TRANSFER" : "REDEMPTION"} amt=${ethers.formatUnits(r.amount, 18)} status=${st} requester=${r.requester}`);
  }
})();
