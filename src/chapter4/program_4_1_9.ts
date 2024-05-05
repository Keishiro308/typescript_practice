// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//   return upper ? str.toUpperCase() : str.toLowerCase();
// }

const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  return upper ? str.toUpperCase() : str.toLowerCase();
}

console.log(toLowerOrUpper('Hello', true)); // HELLO
console.log(toLowerOrUpper('Hello', false)); // hello
console.log(toLowerOrUpper('Hello')); // hello