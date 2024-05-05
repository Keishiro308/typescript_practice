type User2 = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary Sue,14,1
`

const users: User2[] = data.trim().split('\n').map((line) => {
  const [name, ageString, premiumUserString] = line.trim().split(',');
  const age: number = Number(ageString);
  const premiumUserBool: boolean = Boolean(Number(premiumUserString));

  return {name: name, age: age, premiumUser: premiumUserBool}
});

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age}) はプレミアムユーザーです`);
  } else {
    console.log(`${user.name}(${user.age}) はプレミアムユーザーではありません`);
  }
}
