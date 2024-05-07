class User4 {
  name: string;
  age: number;
  private static adminName = "Admin";

  static getAdminName() {
    return this.adminName;
  }

  static getAdminUser() {
    return new User4(User4.adminName, 0);
  }
  static setAdminName(name: string) {
    this.adminName = name;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}

const hoge = new User4("hoge", 26);
console.log(hoge.name);
console.log(hoge.isAdult());
console.log(User4.getAdminName());
User4.setAdminName("Administrator");
console.log(User4.getAdminName());