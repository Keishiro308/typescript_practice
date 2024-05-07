// class User5 {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User5 {
  constructor(public name: string, private age: number) {}
}

const foo = new User5("hoge", 26);
console.log(foo.name);