var fs = require("fs");

fs.readFile("test_data.txt", "utf8", function (err, data) {
  let readings = data.split("\n");
  console.log(readings);
});

// maybe try filtering by word next?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// const result = words.filter(word => word.length > 6);

// console.log(result);


// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = sum;

// function myFunction(item) {
//   sum += item;
// }