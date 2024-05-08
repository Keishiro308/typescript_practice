try {
  console.log("エラーを発生させます");
  throwError();
  console.log("エラーを発生させました");
} catch (error: any) {
  console.log("エラーをキャッチしました");
  console.log(error);
}

console.log("おわり");

function throwError() {
  const error = new Error("エラーが発生しました!!!");
  throw error;
}
