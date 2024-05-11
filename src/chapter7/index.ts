// import { name, age } from "./uhyo.js"
// import { uhyoName, age as uhyoAge, getUhyoName } from "./uhyo.js"
import * as uhyo from "./uhyo.js"
import johnAge from "./johnAge.js"

// console.log(`uhyoの名前は${uhyoName}で年齢は${uhyoAge}です。`);
// console.log(`uhyoの名前は${getUhyoName()}で年齢は${uhyoAge}です。`);
console.log(`uhyoの名前は${uhyo.getUhyoName()}で年齢は${uhyo.age}です。`);
console.log(`johnの年齢は${johnAge}です。`);