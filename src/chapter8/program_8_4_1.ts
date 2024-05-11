// const get3 = () => {
//   return new Promise<number>((resolve) => {
//     console.log("get3()が呼ばれました。");
//     resolve(3);
//   });
// }

// console.log("get3()を呼び出します。");
// const p2 = get3();
// p2.then((result) => {
//   console.log(result);
// });
// console.log("get3()の呼び出し完了。");
// console.log("-----------------");

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function get4() {
  console.log("get4()が呼ばれました。");
  await sleep(1000);
  console.log("awaitの次に進みました");
  return 4;
}

console.log("get4()を呼び出します。");
const p3 = get4();
p3.then((result) => {
  console.log(result);
});
console.log("get4()の呼び出し完了。");
