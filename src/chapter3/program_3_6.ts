const obj11 = {
  str: 'Hello',
  num: 42,
};

const { str, num } = obj11;
console.log(str); // Output: Hello
console.log(num); // Output: 42

const nestedObj = {
  outer: {
    inner: 'Hello',
    inner2: {
      inner3: 'World',
    }
  },
};

const { outer: { inner, inner2: { inner3 } } } = nestedObj;
console.log(inner); // Output: Hello
console.log(inner3); // Output: World

const forTheRestObj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...rest } = forTheRestObj;
console.log(a); // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }