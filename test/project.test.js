// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import { jest, expect, describe, it, beforeEach } from "@jest/globals";
import { Project } from "../src/project";

describe("#Project", () => {
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
      url: "http://www.al.sp.gov.br/propositura?id=1322832",
      indexadores: [],
      etapa: "PAUTA",
      ementa:
        "Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.",
    };

    const result = new Project(data);

    expect(JSON.parse(JSON.stringify(result))).toEqual(expected);
  });
});
