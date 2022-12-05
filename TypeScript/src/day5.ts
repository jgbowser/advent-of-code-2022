import fs from "fs";

const rawData = fs.readFileSync(
  `${__dirname}/../input/input_day5.txt`,
  "utf-8"
);
const parsed = rawData.split("\n");

function part1(): void {
  // first parse out the crate diagram

  /* 
  [Q]         [N]             [N]    
  [H]     [B] [D]             [S] [M]
  [C]     [Q] [J]         [V] [Q] [D]
  [T]     [S] [Z] [F]     [J] [J] [W]
  [N] [G] [T] [S] [V]     [B] [C] [C]
  [S] [B] [R] [W] [D] [J] [Q] [R] [Q]
  [V] [D] [W] [G] [P] [W] [N] [T] [S]
  [B] [W] [F] [L] [M] [F] [L] [G] [J]
  1   2   3   4   5   6   7   8   9 
  */
  const stackMap: Record<number, string[]> = {
    1: ["Q", "H", "C", "T", "N", "S", "V", "B"],
    2: ["G", "B", "D", "W"],
    3: ["B", "Q", "S", "T", "R", "W", "F"],
    4: ["N", "D", "J", "Z", "S", "W", "G", "L"],
    5: ["F", "V", "D", "P", "M"],
    6: ["J", "W", "F"],
    7: ["V", "J", "B", "Q", "N", "L"],
    8: ["N", "S", "Q", "J", "C", "R", "T", "G"],
    9: ["M", "D", "W", "C", "Q", "S", "J"],
  };

  // Just kidding!!! Parsing this sucks

  // let i = 0;
  // while (parsed[i].includes("[")) {
  //   let formatted = parsed[i].replaceAll("   ", " ").replaceAll(" [", "").replaceAll("] ", "").replaceAll("[", "").replaceAll("]", "");
  //   for (let j = 0; j < formatted.length; j++) {
  //     if (formatted[j] === " ") {
  //       continue;
  //     }
  //     if (!stackMap[j + 1]) {
  //       stackMap[j + 1] = [];
  //       stackMap[j + 1].push(formatted[j]);
  //     } else {
  //       stackMap[j + 1].push(formatted[j])
  //     }
  //   }
  //   i++
  // }

  // // now follow the directions

  const inputs = parsed.filter(line => line.includes("move"));
  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j].split(" ");
    const crates = Number(input[1]);
    const from = Number(input[3]);
    const to = Number(input[5]);
    for (let k = 0; k < crates; k++) {
      stackMap[to].unshift(stackMap[from].shift()!);
    }
  }
  let result = "";
  for (const stack of Object.values(stackMap)) {
    result += stack[0];
  }
  console.log("part one answer is:", result);
}

part1();

function part2(): void {
  const stackMap: Record<number, string[]> = {
    1: ["Q", "H", "C", "T", "N", "S", "V", "B"],
    2: ["G", "B", "D", "W"],
    3: ["B", "Q", "S", "T", "R", "W", "F"],
    4: ["N", "D", "J", "Z", "S", "W", "G", "L"],
    5: ["F", "V", "D", "P", "M"],
    6: ["J", "W", "F"],
    7: ["V", "J", "B", "Q", "N", "L"],
    8: ["N", "S", "Q", "J", "C", "R", "T", "G"],
    9: ["M", "D", "W", "C", "Q", "S", "J"],
  };

  const inputs = parsed.filter(line => line.includes("move"));
  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j].split(" ");
    const crates = Number(input[1]);
    const from = Number(input[3]);
    const to = Number(input[5]);
    const moveGroup = [];
    for (let k = 0; k < crates; k++) {
      moveGroup.push(stackMap[from].shift()!);
    }
    stackMap[to].unshift(...moveGroup);
  }
  let result = "";
  for (const stack of Object.values(stackMap)) {
    result += stack[0];
  }
  console.log("part two answer is:", result);
}

part2()
