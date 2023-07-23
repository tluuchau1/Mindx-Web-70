const express = require("express");
const { sumFunction, multiply } = require("./math");
const fs = require("fs");

const numOne = 4,
  numTwo = 5;

const result = sumFunction(numOne, numTwo);
const mul = multiply(numOne, numTwo);

console.log(`Sum between ${numOne} + ${numTwo} = ${result}`);
console.log(`Mul between ${numOne} + ${numTwo} = ${mul}`);

const app = express();
const PORT = 3001;

// app.get("/", (req, res) => {
//   res.send("this is frist web service");
// });

// app.listen(PORT, () => {
//   console.log(`My server is running at port ${PORT}`);
// });

fs.readFile("./testt.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("something went wrong");
    return;
  }
  console.log("data", data);
});
