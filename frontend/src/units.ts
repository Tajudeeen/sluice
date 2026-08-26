const MAX_SAFE_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);

function asBigInt(raw: bigint | string | number): bigint {
  if (typeof raw === "bigint") return raw;
  if (typeof raw === "number" && !Number.isSafeInteger(raw)) throw new Error("Unsafe numeric token value");
  return BigInt(raw);
}

/** Scale integer token units before crossing into JavaScript Number arithmetic. */
export function scaledNumber(raw: bigint | string | number, decimals: number, precision = 9): number {
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 255) throw new Error("Invalid token decimals");
  const value = asBigInt(raw);
  const negative = value < 0n;
  const absolute = negative ? -value : value;
  const scale = 10n ** BigInt(decimals);
  const whole = absolute / scale;
  if (whole > MAX_SAFE_BIGINT) return negative ? -Infinity : Infinity;
  const digits = Math.max(0, Math.min(precision, decimals));
  const fractionScale = 10n ** BigInt(digits);
  const fraction = digits === 0 ? 0n : ((absolute % scale) * fractionScale) / scale;
  const result = Number(whole) + Number(fraction) / Number(fractionScale);
  return negative ? -result : result;
}

/** Exact, locale-independent token formatting without converting raw units to Number. */
export function formatRawUnits(raw: bigint | string | number, decimals: number, maxFraction = 4): string {
  const value = asBigInt(raw);
  const negative = value < 0n;
  const absolute = negative ? -value : value;
  const scale = 10n ** BigInt(decimals);
  const whole = (absolute / scale).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const fraction = (absolute % scale).toString().padStart(decimals, "0").slice(0, Math.max(0, maxFraction)).replace(/0+$/, "");
  return `${negative ? "-" : ""}${whole}${fraction ? `.${fraction}` : ""}`;
}
