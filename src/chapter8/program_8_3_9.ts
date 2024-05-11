import { readFile } from "fs/promises";

const repeat10 = (str: string) => 
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(str.repeat(10));
    }, 1000);
  });

readFile("file.txt", "utf8")
  .then((result) => repeat10(result))
  .then((data) => {
    console.log(data);
  });

