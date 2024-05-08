import { get } from "http";

type Human5 = { name: string };

function useMaybeHuman(human: Human5 | undefined) {
  const name = human?.name;
  console.log(name);
}

type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  const time = getTimeFunc?.();
  const timeString = getTimeFunc?.().toString();
  console.log(time);
}