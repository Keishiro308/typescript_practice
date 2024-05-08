class User9 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません")
    } else {
      this.name = name;
    }
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const user9 = new User9("uhyo", 26);
console.log(user9.getMessage("こんにちは"))

function createUser(name: string, age: number) {
  return (message: string) => `${name} (${age}) 「${message}」`;
}

const getMessage = createUser("uhyo", 26);

console.log(getMessage("こんばんは"));