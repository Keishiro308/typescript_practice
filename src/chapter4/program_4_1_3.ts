type Human2 = {
  height: number,
  weight: number,
};

// const calcBMI = function (human: Human2): number {
//   return human.weight / human.height ** 2;
// }

// const calcBMI = function ({weight, height}: Human2): number {
//   return weight / height ** 2;
// }

// const calcBMI = ({weight, height}: Human2): number => {
//   return weight / height ** 2;
// }

const calcBMI = ({weight, height}: Human2): number => weight / height ** 2;

const uhyo: Human2 = {
  height: 1.7,
  weight: 65,
};

console.log(calcBMI(uhyo)); // 22.49134948096886