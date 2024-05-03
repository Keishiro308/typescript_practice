const userName = "Alice";

const userObject = {
  userName,
  age: 30,
};

const propName = "foo";
const obj = {
  [propName]: "bar",
};

console.log(obj.foo); // bar