// try {
//   console.log("エラーを発生させます");
//   throwError2();
//   console.log("エラーを発生させました");
// } finally {
//   console.log("finally節です");
// }

// console.log("try文の後です");

// function throwError2() {
//   const error = new Error("エラーが発生しました!!!");
//   throw error;
// }

console.log(sum2(100));

function sum2(max: number): number {
  try {
    let result = 0;
    for (let i = 1; i <= max; i++) {
      result += i;
    }
    return result;
  } finally {
    console.log("finally節です");
  }
}