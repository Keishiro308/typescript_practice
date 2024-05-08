class User8 {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const user8 = new User8("John", 30);

// これはエラーになります
// const isAdult = user8.isAdult;
// console.log(isAdult());

// これは動く
const isAdult2 = user8.isAdult();
console.log(isAdult2);

const isAdult3 = user8.isAdult.bind(user8);
console.log(isAdult3());