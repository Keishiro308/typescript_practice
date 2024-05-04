type Family<Parent, Child> = {
  mother: Parent,
  father: Parent,
  children: Child,
};

const family_boolean: Family<boolean, boolean> = {
  mother: true,
  father: false,
  children: true,
};

const family_number: Family<number, number> = {
  mother: 123,
  father: 456,
  children: 789,
};

const family: Family<boolean, number> = {
  mother: true,
  father: false,
  children: 123,
};
