// for (let i:number = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz")
//   } else if (i % 3 === 0) {
//     console.log("Fizz")
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
// }

for (let i:number = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0 && i % 5 === 0) output = "FizzBuzz";
  if (i % 3 === 0) output ||= "Fizz";
  if (i % 5 === 0) output ||= "Buzz";
  console.log(output || i);
}

let result = "";
for (let i:number = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result += "FizzBuzz";
  } else if (i % 3 === 0) {
    result += "Fizz";
  } else if (i % 5 === 0) {
    result += "Buzz";
  } else {
    result += i;
  }
  result += " ";
}

console.log(result);