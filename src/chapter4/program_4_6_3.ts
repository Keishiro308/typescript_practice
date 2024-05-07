function map2<T, S>(array: S[], callback: (arg: S) => T): T[] {
  const result: T[] = [];
  for (const i of array) {
    result.push(callback(i))
  }
  return result;
}

const data2 = [1, 1, 2, 3, 5, 8, 13];

const result3 = map2(data2, (x) => x * 10);

console.log(result3)

const data3 = [1, -3, -2, 8, 0, -1];

const result4: boolean[] = map2(data3, (x) => x >= 0);
console.log(result4);