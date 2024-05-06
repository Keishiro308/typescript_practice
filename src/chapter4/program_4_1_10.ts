type User3 = {
  name: string,
  age: number,
};

const getName = (user: User3): string => user.name;

const users2: User3[] = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 24 },
  { name: 'Jack', age: 30 },
];

console.log(users2.map(getName)); // [ 'John', 'Jane', 'Jack' ]
