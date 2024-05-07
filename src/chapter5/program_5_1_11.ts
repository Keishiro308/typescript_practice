class User6<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }

  isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo2 = new User6<string>("uhyo", 26, "追加データ");
const data4 = uhyo2.data;
console.log(data4);

const hoge2 = new User6<number>("hoge", 26, 100);
const data5 = hoge2.data;
console.log(data5);
