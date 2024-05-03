const obj1 = {
  bar: 456,
  baz: 789,
}

const obj2: {
  foo: number,
  baz: number,
  bar: number,
} = {
  foo: 123,
  ...obj1,
  bar: 101,
}

console.log(obj2);