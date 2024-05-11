import { readFile } from "fs/promises";

const p = readFile("file.txt", "utf8");

p.then((data) => {
  console.log("1");
});

p.then((data) => {
  console.log("2");
});

p.then((data) => {
  console.log(data);
});

p.catch((err) => {
  console.error(err);
});

p.finally(() => {
  console.log("終わりました。");
});