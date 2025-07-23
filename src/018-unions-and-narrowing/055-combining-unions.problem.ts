import { Equal, Expect } from "@total-typescript/helpers";

type HttpSuccess = '200' | '201' | '204';
type HttpError = '400' | '401' | '404' | '500';
type HttpCode = HttpError | HttpSuccess
const handleErrorCase = (code: HttpError) => {
  // An imaginary function where we only handle the errors

  type test = Expect<Equal<typeof code, "400" | "401" | "404" | "500">>;
};

const handleSuccessCase = (code: HttpSuccess) => {
  // An imaginary function where we only handle the success cases

  type test = Expect<Equal<typeof code, "200" | "201" | "204">>;
};

const handleAllCase = (code: HttpCode) => {
  // An imaginary function where we handle all the cases

  type test = Expect<
    Equal<typeof code, "200" | "201" | "204" | "400" | "401" | "404" | "500">
  >;
};
