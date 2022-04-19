// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import { jest, expect, describe, it, beforeEach } from "@jest/globals";
import { Project } from "../src/project";
import { TextProcessorFluentApi } from "../src/textProcessorFluentAPI";
import validTxt from "./mock/valid";

describe("#TextProcessorFluentApi", () => {
  let textProcessorFluentApi = {};

  beforeEach(() => {
    textProcessorFluentApi = new TextProcessorFluentApi(validTxt);
  });

  it("#extractHeaders => should split the headers from the content", () => {
    const expected = {
      headers: "título;link;autor;etapa;ementa;indexadoresnorma;\n",
      content:
        "Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO;\n" +
        "Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Marcia Lia;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;\n" +
        "Projeto de lei 545/2016;http://www.al.sp.gov.br/propositura?id=1322832;Roberto Morais, Itamar Borges;PAUTA;Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.;",
    };

    const content = textProcessorFluentApi.extractHeaders().build();

    expect(expected).toEqual(content);
  });

  it("#splitContentKeys => should split the content and header into arrays", () => {
    const expected = {
      headers: ["título", "link", "autor", "etapa", "ementa", "indexadoresnorma"],
      content: [
        [
          "Projeto de lei 584/2016",
          "http://www.al.sp.gov.br/propositura?id=1322563",
          "Jorge Wilson Xerife do Consumidor",
          "PAUTA",
          "Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.",
          "CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO",
        ],
        [
          "Projeto de lei 580/2016",
          "http://www.al.sp.gov.br/propositura?id=1323286",
          "Marcia Lia",
          "PAUTA",
          "Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.",
          "NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA",
        ],
        [
          "Projeto de lei 545/2016",
          "http://www.al.sp.gov.br/propositura?id=1322832",
          "Roberto Morais, Itamar Borges",
          "PAUTA",
          "Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.",
        ],
      ],
    };

    const content = textProcessorFluentApi.extractHeaders().splitContentKeys().build();

    expect(expected).toEqual(content);
  });

  it("#createRawObject => should split the headers from the content", () => {
    const expected = {
      content: [
        {
          título: "Projeto de lei 584/2016",
          link: "http://www.al.sp.gov.br/propositura?id=1322563",
          autor: "Jorge Wilson Xerife do Consumidor",
          etapa: "PAUTA",
          ementa:
            "Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.",
          indexadoresnorma:
            "CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO",
        },
        {
          autor: "Marcia Lia",
          ementa:
            "Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.",
          etapa: "PAUTA",
          indexadoresnorma:
            "NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA",
          link: "http://www.al.sp.gov.br/propositura?id=1323286",
          título: "Projeto de lei 580/2016",
        },
        {
          autor: "Roberto Morais, Itamar Borges",
          ementa:
            "Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.",
          etapa: "PAUTA",
          link: "http://www.al.sp.gov.br/propositura?id=1322832",
          título: "Projeto de lei 545/2016",
        },
      ],
    };

    const content = textProcessorFluentApi
      .extractHeaders()
      .splitContentKeys()
      .createRawObject()
      .build();

    expect(expected).toEqual(content);
  });

  it("#createRawObject => should split the headers from the content", () => {
    const content = textProcessorFluentApi
      .extractHeaders()
      .splitContentKeys()
      .createRawObject()
      .mapProjects()
      .build();

    expect(content[0]).toBeInstanceOf(Project);
  });
});
