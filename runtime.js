const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10); // DONE - ADDED TO NOTES
const smallArray = getSizedArray(100); // DONE - ADDED TO NOTES
const mediumArray = getSizedArray(1000); // DONE - ADDED TO NOTES
const largeArray = getSizedArray(10000); // DONE - ADDED TO NOTES
const extraLargeArray = getSizedArray(100000); // DONE - ADDED TO NOTES

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log("Results for the tinyArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
