import fs from "fs";

const data = fs.readFileSync(`${__dirname}/../input/input_day3.txt`, "utf-8");
const rucksacks = data.split("\n");
const compartmentsInRucksacks: string[][] = rucksacks.map((items) => {
  const mid = Math.floor(items.length / 2);
  return [items.slice(0, mid), items.slice(mid, items.length)];
});
const upperBoundaries = [65, 90];
const asciiOffsetLowercase = 96;
const asciiOffsetUppercase = 38;

function part1(): void {
  let sum = 0;
  compartmentsInRucksacks.forEach((c) => {
    for (const i of c[0]) {
      if (c[1].includes(i)) {
        if (
          i.charCodeAt(0) >= upperBoundaries[0] &&
          i.charCodeAt(0) <= upperBoundaries[1]
        ) {
          sum += i.charCodeAt(0) - asciiOffsetUppercase;
        } else {
          sum += i.charCodeAt(0) - asciiOffsetLowercase;
        }
        break;
      }
    }
  });
  console.log("part one answer is: ", sum);
}

part1();

function part2(): void {
  const groups: string[][] = [];
  let tempGroup: string[] = [];
  for (let i = 1; i <= rucksacks.length; i++) {
    tempGroup.push(rucksacks[i - 1]);
    if (i % 3 === 0) {
      groups.push(tempGroup);
      tempGroup = [];
    }
  }

  let sum = 0;
  groups.forEach((group) => {
    for (const i of group[0]) {
      if (group[1].includes(i) && group[2].includes(i)) {
        if (
          i.charCodeAt(0) >= upperBoundaries[0] &&
          i.charCodeAt(0) <= upperBoundaries[1]
        ) {
          sum += i.charCodeAt(0) - asciiOffsetUppercase;
        } else {
          sum += i.charCodeAt(0) - asciiOffsetLowercase;
        }
        break;
      }
    }
  });
  console.log("part two answer is: ", sum);
}

part2();
