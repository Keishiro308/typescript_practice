function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === 'string' || typeof value === 'number';
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
    console.log(something.toString());
}



type Human9 = {
  type: 'human';
  name: string;
  age: number;
};

function isHuman(value: any): value is Human9 {
  if (value == null) return false;

  return (
    value.type === "human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

function assertHuman(value: any): asserts value is Human9 {
  if (value == null) {
    throw new Error("value is null or undefined");
  }

  if (
    value.type !== "human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error("value is not a Human");
  }
}
