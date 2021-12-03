// Instructions here: https://adventofcode.com/2021/day/1

import depths from "./01_sonar_sweep_data.js";

// PART 1
// single depth measurement increase counter
let j = 0

// loop that increments j counter by 1 each time a depth measurement is greater than the previous one
for (let i = 1; i < depths.length; i++) {
  let depth1 = depths[i - 1];
  let depth2 = depths[i];
  if (depth1 < depth2) {
    j++;
  } 
}

console.log(j);

// PART 2
// sum-of-3 depth measurement increase counter
let k = 0

// loop that increments k counter by 1 each time a sum-of-3 depth measurement is greater than the previous one
for (let i = 0; i < depths.length; i++) {
  let depthSum1 = (depths[i]+depths[i+1]+depths[i+2]);
  let depthSum2 = (depths[i+1]+depths[i+2]+depths[i+3]);
  if (depthSum2 > depthSum1) {
    k++;
  } 
}

console.log(k);