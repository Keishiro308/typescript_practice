type Human5 = {
  type: 'human';
  name: string;
  age: number;
};

function setAge(human: Human5, age: Human5["age"]) {
  return { ...human, age };
}

const uhyo5: Human5 = {
  type: 'human',
  name: 'uhyo',
  age: 30,
};

const uhyo6 = setAge(uhyo5, 31);
console.log(uhyo6);

type HumanKeys = keyof Human5;

let key: HumanKeys = 'name';
key = 'age';
// key = "hoge";
key = "type";