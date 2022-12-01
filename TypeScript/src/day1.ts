import fs from "fs";

const data = fs.readFileSync(`${__dirname}/../input/input_day1.txt`, "utf-8");
const elfSnacks = data.split("\n");

let highest = 0;
let current = 0;
elfSnacks.forEach((v: string) => {
  if (v === "") {
    if (current > highest) {
      highest = current;
      current = 0;
      return;
    } else {
      current = 0;
    }
  } else {
    current += Number(v);
  }
});

console.log(`Highest number of calories: ${highest}`);

let firstHighest = 0;
let secondHighest = 0;
let thirdHighest = 0;
let current2 = 0;
elfSnacks.forEach((v: string) => {
  if (v === "") {
    if (current2 >= thirdHighest && current2 <= secondHighest) {
      thirdHighest = current2;
      current2 = 0;
      return;
    } else if (current2 >= secondHighest && current2 <= firstHighest) {
      thirdHighest = secondHighest;
      secondHighest = current2;
      current2 = 0;
    } else if (current2 >= firstHighest) {
      thirdHighest = secondHighest;
      secondHighest = firstHighest;
      firstHighest = current2;
      current2 = 0
      return;
    } else {
      current2 = 0;
      return;
    }
  } else {
    current2 += Number(v);
  }
});

console.log(`The total of the top 3 calories are: ${firstHighest + secondHighest + thirdHighest}`);

