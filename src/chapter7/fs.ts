import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const lines = fs.readFileSync("src/chapter7/uhyo.txt", "utf-8");
const indexes = lines.indexOf("uhyo");

let counter = 0;
let indicator = 0;
while (indicator !== -1) {
  indicator = lines.indexOf("uhyo", indicator + 1);
  if (indicator !== -1) {
    counter++;
  }
}
console.log(counter);
