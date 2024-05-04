const r = /ab+c/;

console.log(r.test('ac')); // Output: false
console.log(r.test('abc')); // Output: true
console.log(r.test('abbc')); // Output: true
console.log(r.test('abbbc')); // Output: true

const result2 = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result2 !== null) {
  console.log(result2.groups);
}