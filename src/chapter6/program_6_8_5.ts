function mapOption<T, U>(obj: Optional<T>, callback: (value: T) => U): Optional<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      }
    case "none":
      return {
        tag: "none"
      }
  }
}