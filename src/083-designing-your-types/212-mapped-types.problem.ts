import { Equal, Expect } from "@total-typescript/helpers";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = { 
  [P in keyof Attributes]: () => Attributes[P]
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
