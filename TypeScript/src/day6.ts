import fs from "fs";

const data = fs.readFileSync(
  `${__dirname}/../input/input_day6.txt`,
  "utf-8"
);

function part1(): void {
 for (let i = 4; i < data.length; i++) {
    const group = `${data[i]}${data[i - 1]}${data[i - 2]}${data[i - 3]}`;
    INNER: for (let j = i; j >= i - 3; j--) {
      const regex = new RegExp(`${data[j]}`, "g")
      let replaced = group.replace(regex, "")
      if (replaced.length < 3) break INNER;
      if (j === i - 3) {
        console.log("part one answer is: ", i + 1);
        return;
      }
    }
  }
}

part1();

function part2(): void {
  for (let i = 13; i < data.length; i++) {
     let group = "";
     for (let j = 0; j < 14; j++) {
      group += `${data[i - j]}`;
     }
     INNER: for (let j = i; j >= i - 14; j--) {
       const regex = new RegExp(`${data[j]}`, "g")
       let replaced = group.replace(regex, "")
       if (replaced.length < 13) break INNER;
       if (j === i - 13) {
         console.log("part two answer is: ", i + 1);
         return;
       }
     }
   }
 }
 
 part2();