const obj12 = {
  double(num: number): number {
    return num * 2;
  },

  double2: (num: number): number => {
    return num * 2;
  },

  addAll(...nums: number[]): number {
    let sum: number = 0;

    for (const num of nums) {
      sum += num;
    }
    return sum
  },
}

console.log(obj12.double(2)); // 4
console.log(obj12.double2(3)); // 6

const nums = [1, 2, 3, 4, 5];
console.log(obj12.addAll(...nums)); // 15