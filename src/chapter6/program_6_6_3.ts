function doNothing(val: unknown): void {
  console.log(val);
}

doNothing(5);
doNothing('hello');

// function doNothing2(val: unknown) {
//   const name = val.name;
//   console.log(name);
// }

function doNothing3(val: unknown) {
  if (typeof val === 'string') {
    console.log(val.slice(0, 3));
  }
}