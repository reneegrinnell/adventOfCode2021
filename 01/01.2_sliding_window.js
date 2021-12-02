// Your goal now is to count the number of times the sum of measurements in this sliding window
// increases from the previous sum. So, compare A with B, then compare B with C, then C with D,
// and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

// import depths from "./01_sonar_sweep_data.js";

let depths = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let n = depths.length;
const k = 3;

// Returns maximum sum in a subarray of size k.
function maxSum(depths, n, k) {
  // Initialize result
  let max_sum = Number.MIN_VALUE;

  // Consider all blocks starting with i.
  for (let i = 0; i < n - k + 1; i++) {
    let current_sum = 0;
    for (let j = 0; j < k; j++) current_sum = current_sum + depths[i + j];

    // Update result if required.
    max_sum = Math.max(current_sum, max_sum);
  }

  return max_sum;
}

console.log(maxSum(depths, n, k));
