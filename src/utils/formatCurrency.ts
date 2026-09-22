/**
 * Formats numbers into Indian Rupee format (e.g. ₹25,000, ₹1,50,000, ₹4,31,000)
 */
export function formatIndianCurrency(amount: number, compact: boolean = false): string {
  if (isNaN(amount) || !isFinite(amount)) return "₹0";

  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  if (compact) {
    if (absAmount >= 10000000) {
      // Crores
      return `${isNegative ? "-" : ""}₹${(absAmount / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
    }
    if (absAmount >= 100000) {
      // Lakhs
      return `${isNegative ? "-" : ""}₹${(absAmount / 100000).toFixed(1).replace(/\.0$/, "")} L`;
    }
    if (absAmount >= 1000) {
      return `${isNegative ? "-" : ""}₹${(absAmount / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
  }

  // Standard Indian formatting (last 3 digits, then groups of 2 digits)
  const integerPart = Math.round(absAmount).toString();
  let result = "";

  if (integerPart.length <= 3) {
    result = integerPart;
  } else {
    const lastThree = integerPart.substring(integerPart.length - 3);
    const remaining = integerPart.substring(0, integerPart.length - 3);
    const withCommas = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    result = `${withCommas},${lastThree}`;
  }

  return `${isNegative ? "-" : ""}₹${result}`;
}

export function formatCompactNumber(num: number): string {
  if (isNaN(num) || !isFinite(num)) return "0";
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return Math.round(num).toLocaleString();
}
