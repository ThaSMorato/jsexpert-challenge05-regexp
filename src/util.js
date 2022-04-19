// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import safeRegex from "safe-regex";

export class InvalidRegexError extends Error {
  constructor(exp) {
    super(`This ${exp} is unsafe dude`);
    this.name = "InvalidRegexError";
  }
}

export const evaluateRegex = (exp) => {
  const isSafe = safeRegex(exp);

  if (!isSafe) throw new InvalidRegexError(exp);

  return exp;
};
