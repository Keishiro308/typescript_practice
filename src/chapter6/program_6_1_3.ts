type Animal = {
  species: string;
  age: number;
};

type Human3 = Animal & {
  name: string;
};

const tama: Animal = {
  species: "cat",
  age: 3
};

const uhyo3: Human3 = {
  species: "human",
  age: 26,
  name: "uhyo"
};