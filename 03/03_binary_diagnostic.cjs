const fs = require("fs");
const path = require("path");

// Grabbing data and splitting each binary value into a discrete string
const data = fs.readFileSync(path.resolve(__dirname, "03_test_data.txt"), {
  encoding: "utf-8",
});

const binaryStrings = data.split("\n");

// let slicedStrings = binaryStrings.slice(1);
// console.log("sliced string " + slicedStrings);
// need var to store sliced #s lol

// console.log(binaryStrings);

// Initializing counters
let zero = 0;
let one = 0;
let gammaFinalBinary = '';
let epsilonFinalBinary = '';

// Loop to increment zero and one counters
for (let i = 0; i < binaryStrings.length; i++) {
  if (binaryStrings[i] === '0') {
    zero++;
  } else {
    one++;
  }
}

function findGammaEpsilon() {
  if (zero > one) {
    gammaFinalBinary = gammaFinalBinary.concat('0');
    epsilonFinalBinary = epsilonFinalBinary.concat('1');
  } else {
    gammaFinalBinary = gammaFinalBinary.concat('1');
    epsilonFinalBinary = epsilonFinalBinary.concat('0');
  }
}

findGammaEpsilon();
console.log("findGammaEpsilon called");
console.log("zero: " + zero)
console.log("one: " + one)
console.log("gammafinalbinary " + gammaFinalBinary);
console.log("epfinalbinary " + epsilonFinalBinary);


// don't forget to convert to decimal at end!
