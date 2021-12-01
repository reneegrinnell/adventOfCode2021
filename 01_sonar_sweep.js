// Instructions here: https://adventofcode.com/2021/day/1

import depths from "./01_sonar_sweep_data.js";

// depth measurement increase counter
let j = 0

// loop that increments j counter by 1 each time a depth measurement is greater than the previous one
for (var i = 1; i < depths.length; i++) {
  var depth1 = depths[i - 1];
  var depth2 = depths[i];
  if (depth1 < depth2) {
    j++;
  } 
}

console.log(j);