// Enormous hat tip to Github user Uptip for lines 14 and 15!!!
// I was tearing my hair out over how to deal with the array of strings produced by line 8...
// https://github.com/Uptip/advent-of-code-2021/blob/main/src/02/index.js

const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "test_data.txt"), {
  encoding: 'utf-8',
})

const readings = data
  .split("\n")
  .map(line => line.split(" "))
  .map(([direction, change]) => [direction, Number(change)])

let horizontal = 0;
let vertical = 0;

console.log(readings);

// for (let i = 0; i < readings.length; i++) {
//   switch (readings) {
//     case 0:
//       command === "forward";
//       horizontal = horizontal+value;
//       console.log(horizontal);
//       break;
//     case 1:
//       command === "down";
//       vertical = vertical+value;
//       break;
//     case 2:
//       command === "up";
//       vertical = vertical-value;
//       break;
//   }
// }

// console.log (horizontal*vertical);