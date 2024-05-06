type MyFunc = {
  isUsed?: boolean,
  (arg: number): void;
};

const double: MyFunc = (num: number) => {
  console.log(num * 2);
};

double.isUsed = true;
console.log(double.isUsed); // true
double(5); // 10