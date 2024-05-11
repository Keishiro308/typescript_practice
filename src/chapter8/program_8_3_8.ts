import { readFile } from "fs/promises";

const p = readFile("file.txt", "utf8");

const p2 = p.then((data) => { return data + data });

p2.then((data) => {
  console.log(data);
});