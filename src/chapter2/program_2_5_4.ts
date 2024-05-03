import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("コマンドを入力してください: ", (command) => {
  switch (command) {
    case "greet":
      console.log("こんにちは！");
      break;
    case "cat":
      console.log("あなたは猫派ですか？");
      break;
    default:
      console.log(`不明なコマンドです: ${command}`);
      break;
  }
  rl.close();
});