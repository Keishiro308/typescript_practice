type MyObj = {
  foo: boolean,
  bar: boolean,
  baz?: number,
};

const obj5: MyObj = {
  foo: true,
  bar: false,
};

const obj6: MyObj = {
  foo: true,
  bar: false,
  baz: 1234,
};

console.log(obj5.baz);
console.log(obj6.baz);

if (obj6.baz !== undefined) {
  console.log(obj6.baz * 10);
}