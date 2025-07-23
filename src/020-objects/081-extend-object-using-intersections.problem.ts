import { Extends, Expect } from "@total-typescript/helpers";

type BaseExample = {
  id: string;
  createdAt: Date;
}

type User = {
  name: string;
  email: string;
} & BaseExample;

type Product = {
  name: string;
  price: number;
} & BaseExample;


type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
