// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import { evaluateRegex } from "./util.js";

export class Project {
  constructor({
    título = "",
    link = "",
    autor = "",
    etapa = "",
    ementa = "",
    indexadoresnorma = "",
  }) {
    const yearAndNumberRegex = evaluateRegex(/(?<=Projeto de lei )(?<lei>\d*)\/(?<ano>\d*)/gm);
    const idRegex = evaluateRegex(/(?<=id=)(\d*)/gm);
    const commaRegex = evaluateRegex(/,/gm);
    const trimRegex = evaluateRegex(/^\s/gm);

    const splitByCommaAndRemoveTrim = (string) =>
      string
        .split(commaRegex)
        .map((item) => item.replace(trimRegex, ""))
        .filter((item) => item.length > 0);

    const {
      groups: { lei, ano },
    } = yearAndNumberRegex.exec(título);
    const id = link.match(idRegex)[0];
    const autors = splitByCommaAndRemoveTrim(autor).map((autor) => ({
      nome: autor,
    }));

    const indexadores = splitByCommaAndRemoveTrim(indexadoresnorma);

    this.numero = lei;
    this.ano = ano;
    this.id = id;
    this.autores = autors;
    this.url = link;
    this.etapa = etapa;
    this.ementa = ementa;

    this.indexadores = indexadores;
  }
}
