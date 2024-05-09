type Animal3 = {
  type: "animal";
  species: string;
}

type Human7 = {
  type: "human";
  name: string;
}

type User10 = Animal3 | Human7;

function getNamesIfAllHuman(users: User10[]) {
  if (users.every(user => user.type === "human")) {
    return (users as Human7[]).map(user => user.name);
  } else {
    return [];
  }
}