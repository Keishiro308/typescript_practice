type Human4 = { name: string };
type Animal2 = { species: string };

function getName2(human: Human4): string {
  return human.name;
}

function getSpecies(animal: Animal2): string {
  return animal.species;
}

const mysteryFunc = Math.random() < 0.5 ? getName2 : getSpecies;

const uhyo4: Human4 & Animal2 = {
  name: "uhyo",
  species: "human"
};

const value = mysteryFunc(uhyo4);
console.log(value);