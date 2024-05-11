import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  })
};

const p = Promise.allSettled([
  readFile("foo.txt", "utf8"),
  sleepReject(1000),
]);

p.then((results) => {
  console.log(results);
});
