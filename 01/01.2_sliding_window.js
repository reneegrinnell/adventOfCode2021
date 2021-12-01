// Your goal now is to count the number of times the sum of measurements in this sliding window 
// increases from the previous sum. So, compare A with B, then compare B with C, then C with D, 
// and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.

// import depths from "./01_sonar_sweep_data.js";

let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
let k = 3;
let n = arr.length;