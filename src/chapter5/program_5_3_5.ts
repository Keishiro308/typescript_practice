type HasName3 = {
  name: string;
  getName(): string;
};

class User7 implements HasName3 {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public getName(): string {
    return this.name;
  }
}