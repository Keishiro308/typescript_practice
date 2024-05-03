type PriceData = {
  [key: string]: number,
};

const priceData: PriceData = {
  banana: 100,
  apple: 200,
  orange: 300,
};

priceData.chicken = 400;
priceData.beef = 500;

console.log(priceData);