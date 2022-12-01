const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split("\n\n");
  numbers = arr.map((line) =>
    line.split("\n").map((number) => parseInt(number))
  );
  console.log(numbers);
  return numbers;
}

function findMax(calories) {
  let max = 0;
  calories.forEach((list) => {
    const total = list.reduce((num, acc) => (acc += num), 0);
    if (total > max) {
      max = total;
    }
  });
  return max;
}

function findTop3(calories) {
  let max = 0;
  let second = 0;
  let third = 0;
  calories.forEach((list) => {
    const total = list.reduce((num, acc) => (acc += num), 0);
    if (total > max) {
      third = second;
      second = max;
      max = total;
    } else if (total > second) {
      third = second;
      second = total;
    } else if (total > third) {
      third = total;
    }
  });
  return [max, second, third];
}

const arr = syncReadFile("input.txt");
const [first, second, third] = findTop3(arr);
console.log(first, second, third);
console.log(first + second + third);
