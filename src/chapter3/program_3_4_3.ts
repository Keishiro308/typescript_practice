type HasName = {
  name: string,
};

type Human = {
  name: string,
  age: number,
};

type Family2<Parent extends HasName, Child extends HasName> = {
  mother: Parent,
  father: Parent,
  children: Child,
};

// const family2: Family2<string, boolean> = {
//   mother: 'mother',
//   father: 'father',
//   children: true,
// };

const family3: Family2<Human, Human> = {
  mother: {
    name: 'mother',
    age: 30,
  },
  father: {
    name: 'father',
    age: 30,
  },
  children: {
    name: 'child',
    age: 10,
  },
};