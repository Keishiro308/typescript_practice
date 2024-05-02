import { createInterface } from "readline";

const str: any = "3";

console.log(str == 3);

console.log(str === 3);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください: ", (name) => {
  const displayName = name || "名無し";
  console.log(`こんにちは、${displayName}さん！`);
  rl.close();
});