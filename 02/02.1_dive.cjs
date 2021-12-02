var fs = require("fs");

fs.readFile("test_data.txt", "utf8", function (err, data) {
  let readings = data.split("\n");
  console.log(readings);
});

// const result = words.filter(word => word.length > 6);

// console.log(result);


// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = sum;

// function myFunction(item) {
//   sum += item;
// }