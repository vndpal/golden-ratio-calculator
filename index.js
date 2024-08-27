// index.js

// Define the golden ratio constant (approximately 1.618)
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

/**
 * Returns the value of the golden ratio (φ).
 * @returns {number} The value of the golden ratio.
 */
function getGoldenRatio() {
  return GOLDEN_RATIO;
}

/**
 * Calculates the golden ratio of a given number.
 * @param {number} number - The number to apply the golden ratio to.
 * @returns {number} The number multiplied by the golden ratio.
 */
function applyGoldenRatio(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return number * GOLDEN_RATIO;
}

module.exports = {
  getGoldenRatio,
  applyGoldenRatio,
};
