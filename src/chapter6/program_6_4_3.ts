function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

type Human6 = {
  name: string;
  age: number;
};

const uhyo7: Human6 = {
  name: 'uhyo',
  age: 30,
};

const name2 = get(uhyo7, 'name');
console.log(name2);

const age2 = get(uhyo7, 'age');
console.log(age2);