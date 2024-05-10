type Optional<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
};

function showNumber(obj: Optional<number>): void {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

function isSome<T>(obj: Optional<T>): obj is { tag: "some", value: T} {
  return obj.tag === "some";
}