import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (line) => {
  const num = Number(line);
  console.log(1000 + num);
  rl.close();
});