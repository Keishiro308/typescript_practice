type HasName2 = {
  name: string,
};

type HasNameAndAge = {
  name: string,
  age: number,
};

const fromAge = (age: number): HasNameAndAge => ({
  name: 'John',
  age,
});

const f: (age: number) => HasName2 = fromAge;
const obj13: HasName2 = f(25);
console.log(obj13);