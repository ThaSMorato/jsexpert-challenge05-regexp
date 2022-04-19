// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
import { describe, it, expect } from "@jest/globals";
import { evaluateRegex, InvalidRegexError } from "../src/util";

describe("#Util", () => {
  describe("#evaluateRegex", () => {
    it("should throw an error using an unsafe regex", () => {
      const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/;
      try {
        const safeRegex = evaluateRegex(unsafeRegex);
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidRegexError);
        expect(e.message).toBe(`This ${unsafeRegex} is unsafe dude`);
        expect(e).toEqual(new InvalidRegexError(unsafeRegex));
      }

      expect(() => evaluateRegex(unsafeRegex)).toThrowError();
    });

    it("should not throw an error using a safe regex", () => {
      const regex = /^([a-z])$/;

      const safeRegex = evaluateRegex(regex);

      expect(safeRegex).toBe(regex);
      expect(() => evaluateRegex(safeRegex)).not.toThrowError();
    });
  });
});
