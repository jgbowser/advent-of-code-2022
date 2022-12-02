import fs from "fs";

const data = fs.readFileSync(`${__dirname}/../input/input_day2.txt`, "utf-8");
const rounds = data.split("\n");

type Possibility = "AX" | "AY" | "AZ" | "BX" | "BY" | "BZ" | "CX" | "CY" | "CZ";
type MyOption = "X" | "Y" | "Z";

const myChoiceMap = {
  X: 1,
  Y: 2,
  Z: 3,
};

const myResultMap = {
  AX: "tie",
  AY: "win",
  AZ: "lose",
  BX: "lose",
  BY: "tie",
  BZ: "win",
  CX: "win",
  CY: "lose",
  CZ: "tie",
};

let score = 0;
rounds.forEach((r) => {
  let choices = r.replace(" ", "") as Possibility;
  let myChoice = choices[1] as MyOption;
  score += myChoiceMap[myChoice];
  switch (myResultMap[choices]) {
    case "lose":
      score += 0;
      break;
    case "tie":
      score += 3;
      break;
    case "win":
      score += 6;
      break;
  }
});

console.log(`My expected score is: ${score}`);

type Result = "win" | "lose" | "tie";
type OpponentChoice = "A" | "B" | "C";

const outcomeMap = {
  X: "lose",
  Y: "tie",
  Z: "win",
};

const losePointsMap = {
  A: 3,
  B: 1,
  C: 2,
};

const tiePointsMap = {
  A: 1,
  B: 2,
  C: 3,
};

const winPointsMap = {
  A: 2,
  B: 3,
  C: 1,
};

let score2 = 0;
rounds.forEach((r) => {
  const choices = r.replace(" ", "") as Possibility;
  const opponentChoice = choices[0] as OpponentChoice;
  const outcome = choices[1] as MyOption;

  switch (outcomeMap[outcome]) {
    case "lose":
      score2 += losePointsMap[opponentChoice];
      break;
    case "tie":
      score2 += 3 + tiePointsMap[opponentChoice];
      break;
    case "win":
      score2 += 6 + winPointsMap[opponentChoice];
  }
});

console.log(`total points after correctly deciphering: ${score2}`)
