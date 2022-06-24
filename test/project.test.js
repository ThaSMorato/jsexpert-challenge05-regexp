// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import { jest, expect, describe, it, beforeEach } from "@jest/globals";
import { Project } from "../src/project";

describe("#Project", () => {
  describe("Without indexadoresnorma", () => {
    it("#constructor - should return an instance with new data from the parameters", () => {
      const data = {
        título: "Projeto de lei 545/2016",
        link: "http://www.al.sp.gov.br/propositura?id=1322832",
        autor: "Roberto Morais, Itamar Borges",
        etapa: "PAUTA",
        ementa:
          "Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.",
      };

      const expected = {
        id: "1322832",
        numero: "545",
        ano: "2016",
        autores: [{ nome: "Roberto Morais" }, { nome: "Itamar Borges" }],
        indexadores: [],
      };

      const result = new Project(data);

      expect(result.id).toBe(expected.id);
      expect(result.numero).toBe(expected.numero);
      expect(result.ano).toBe(expected.ano);
      expect(result.autores).toEqual(expected.autores);
      expect(result.url).toBe(data.link);
      expect(result.indexadores).toEqual(expected.indexadores);
      expect(result.etapa).toBe(data.etapa);
      expect(result.ementa).toBe(data.ementa);
    });
  });

  describe("With indexadoresnorma", () => {
    it("#constructor - should return an instance with new data from the parameters", () => {
      const data = {
        título: "Projeto de lei 545/2016",
        link: "http://www.al.sp.gov.br/propositura?id=1322832",
        autor: "Roberto Morais, Itamar Borges",
        etapa: "PAUTA",
        ementa:
          "Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.",
        indexadoresnorma: "indexador1, indexador2, indexador3",
      };

      const expected = {
        id: "1322832",
        numero: "545",
        ano: "2016",
        autores: [{ nome: "Roberto Morais" }, { nome: "Itamar Borges" }],
        indexadores: ["indexador1", "indexador2", "indexador3"],
      };

      const result = new Project(data);

      expect(result.id).toBe(expected.id);
      expect(result.numero).toBe(expected.numero);
      expect(result.ano).toBe(expected.ano);
      expect(result.autores).toEqual(expected.autores);
      expect(result.url).toBe(data.link);
      expect(result.indexadores).toEqual(expected.indexadores);
      expect(result.etapa).toBe(data.etapa);
      expect(result.ementa).toBe(data.ementa);
    });
  });
});
