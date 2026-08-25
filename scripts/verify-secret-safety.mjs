import fs from "node:fs";

const deploySource = fs.readFileSync(new URL("./deploy.ts", import.meta.url), "utf8");
const forbidden = [
  /console\.(?:log|warn|error)\s*\([^\n]*process\.env\.(?:ATTESTER_PRIVATE_KEY|DEPLOYER_PRIVATE_KEY)/,
  /console\.(?:log|warn|error)\s*\([^\n]*process\.env\.(?:GROQ_API_KEY|ANTHROPIC_API_KEY|PROCESS_TOKEN)/,
];

for (const pattern of forbidden) {
  if (pattern.test(deploySource)) {
    throw new Error(`Secret-safety check failed: deployment output matches ${pattern}`);
  }
}

console.log("Secret-safety check passed: deployment output does not interpolate private/API keys or tokens.");
