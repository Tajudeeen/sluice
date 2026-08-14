const { ethers } = require("ethers");
const RPC = "http://127.0.0.1:8545";
const GATE = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
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
