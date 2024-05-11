import { fileURLToPath } from "url";
import path from "path";
import { readFile } from "fs/promises";

function reject(duration: number) {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
}

function waitUpTo(duration: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(""), duration);
  });
}

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../../uhyo.txt");

const data = readFile(dataFile, "utf-8");
const p = Promise.race([
  data,
  // reject(1),
  waitUpTo(1),
]);

let counter = 0;
let indicator = 0;
p.then((data) => {
  console.log(data);
  while (indicator !== -1) {
    indicator = data.indexOf("uhyo", indicator + 1);
    if (indicator !== -1) {
      counter++;
    }
  }
}).then(
  () => { console.log(counter); }
).catch((err) => {
  console.error(err);
});
