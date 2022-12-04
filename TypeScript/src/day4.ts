import fs from "fs";

const rawData = fs.readFileSync(
  `${__dirname}/../input/input_day4.txt`,
  "utf-8"
);
const parsed = rawData.replaceAll(",", "\n").split("\n");
const pairsArr: string[][] = [];
for (let i = 0; i < parsed.length; i += 2) {
  pairsArr.push([parsed[i], parsed[i + 1]]);
}

function part1(): void {
  let fullOverlaps = 0;
  pairsArr.forEach((pair) => {
    const elf1 = pair[0].split("-");
    const elf2 = pair[1].split("-");
    if (
      (Number(elf1[0]) >= Number(elf2[0]) &&
        Number(elf1[1]) <= Number(elf2[1])) ||
      (Number(elf2[0]) >= Number(elf1[0]) && 
        Number(elf2[1]) <= Number(elf1[1]))
    ) {
      fullOverlaps++;
    }
  });
  console.log("part one answer is: ", fullOverlaps);
}
part1();

function part2(): void {
  let overlaps = 0;
  pairsArr.forEach((pair) => {
    const elf1 = pair[0].split("-");
    const elf2 = pair[1].split("-");
    if (
      (Number(elf1[0]) >= Number(elf2[0]) &&
        Number(elf1[0]) <= Number(elf2[1])) ||
      (Number(elf1[1]) <= Number(elf2[1]) &&
        Number(elf1[1]) >= Number(elf2[0])) ||
      (Number(elf2[0]) >= Number(elf1[0]) &&
        Number(elf2[0]) <= Number(elf1[1])) ||
      (Number(elf2[1]) <= Number(elf1[1]) && 
        Number(elf2[1]) >= Number(elf1[0]))
    ) {
      overlaps++;
    }
  });
  console.log("part two answer is: ", overlaps);
}

part2();
