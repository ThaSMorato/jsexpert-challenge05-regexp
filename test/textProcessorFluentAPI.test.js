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
      headers: "título;link;autor;etapa;ementa;indexadoresnorma;\r\n",
      content:
        "Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO;\r\n" +
        "Projeto de lei 583/2016;http://www.al.sp.gov.br/propositura?id=1322562;Jorge Wilson Xerife do Consumidor;PAUTA;Assegura ao cônjuge ou à pessoa em união estável do consumidor responsável pela unidade consumidora o direito de fazer constar na fatura de serviços o seu nome, e dá outras providências.;CONSUMIDOR, ÁGUA (ABASTECIMENTO), ENERGIA ELÉTRICA, CÔNJUGE, EMPRESA PRESTADORA DE SERVIÇO, TELEFONIA, ATESTADO DE RESIDÊNCIA, NOME, UNIÃO ESTÁVEL, INCLUSÃO, FATURA MENSAL DE CONSUMO;\r\n" +
        "Projeto de lei 582/2016;http://www.al.sp.gov.br/propositura?id=1323583;Jorge Wilson Xerife do Consumidor;PAUTA;Torna obrigatória, em todos os supermercados e congêneres, a adaptação de 5% (cinco por cento) dos carrinhos de compras às crianças com deficiência ou mobilidade reduzida.;SUPERMERCADO, HIPERMERCADO, CRIANÇA, MOBILIDADE REDUZIDA, ADAPTAÇÃO, CRIANÇAS COM NECESSIDADES ESPECIAIS, CARRINHO DE COMPRA;\r\n" +
        "Projeto de lei 581/2016;http://www.al.sp.gov.br/propositura?id=1323579;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a comercialização de produtos não disponíveis em estoque, e dá outras providências.;PROIBIÇÃO, COMERCIALIZAÇÃO, INTERNET, ESTOQUE, PRODUTOS, INDISPONÍVEL;\r\n" +
        "Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Marcia Lia;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;",
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
          "Projeto de lei 583/2016",
          "http://www.al.sp.gov.br/propositura?id=1322562",
          "Jorge Wilson Xerife do Consumidor",
          "PAUTA",
          "Assegura ao cônjuge ou à pessoa em união estável do consumidor responsável pela unidade consumidora o direito de fazer constar na fatura de serviços o seu nome, e dá outras providências.",
          "CONSUMIDOR, ÁGUA (ABASTECIMENTO), ENERGIA ELÉTRICA, CÔNJUGE, EMPRESA PRESTADORA DE SERVIÇO, TELEFONIA, ATESTADO DE RESIDÊNCIA, NOME, UNIÃO ESTÁVEL, INCLUSÃO, FATURA MENSAL DE CONSUMO",
        ],
        [
          "Projeto de lei 582/2016",
          "http://www.al.sp.gov.br/propositura?id=1323583",
          "Jorge Wilson Xerife do Consumidor",
          "PAUTA",
          "Torna obrigatória, em todos os supermercados e congêneres, a adaptação de 5% (cinco por cento) dos carrinhos de compras às crianças com deficiência ou mobilidade reduzida.",
          "SUPERMERCADO, HIPERMERCADO, CRIANÇA, MOBILIDADE REDUZIDA, ADAPTAÇÃO, CRIANÇAS COM NECESSIDADES ESPECIAIS, CARRINHO DE COMPRA",
        ],
        [
          "Projeto de lei 581/2016",
          "http://www.al.sp.gov.br/propositura?id=1323579",
          "Jorge Wilson Xerife do Consumidor",
          "PAUTA",
          "Dispõe sobre a comercialização de produtos não disponíveis em estoque, e dá outras providências.",
          "PROIBIÇÃO, COMERCIALIZAÇÃO, INTERNET, ESTOQUE, PRODUTOS, INDISPONÍVEL",
        ],
        [
          "Projeto de lei 580/2016",
          "http://www.al.sp.gov.br/propositura?id=1323286",
          "Marcia Lia",
          "PAUTA",
          "Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.",
          "NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA",
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
          título: "Projeto de lei 583/2016",
          link: "http://www.al.sp.gov.br/propositura?id=1322562",
          autor: "Jorge Wilson Xerife do Consumidor",
          etapa: "PAUTA",
          ementa:
            "Assegura ao cônjuge ou à pessoa em união estável do consumidor responsável pela unidade consumidora o direito de fazer constar na fatura de serviços o seu nome, e dá outras providências.",
          indexadoresnorma:
            "CONSUMIDOR, ÁGUA (ABASTECIMENTO), ENERGIA ELÉTRICA, CÔNJUGE, EMPRESA PRESTADORA DE SERVIÇO, TELEFONIA, ATESTADO DE RESIDÊNCIA, NOME, UNIÃO ESTÁVEL, INCLUSÃO, FATURA MENSAL DE CONSUMO",
        },
        {
          título: "Projeto de lei 582/2016",
          link: "http://www.al.sp.gov.br/propositura?id=1323583",
          autor: "Jorge Wilson Xerife do Consumidor",
          etapa: "PAUTA",
          ementa:
            "Torna obrigatória, em todos os supermercados e congêneres, a adaptação de 5% (cinco por cento) dos carrinhos de compras às crianças com deficiência ou mobilidade reduzida.",
          indexadoresnorma:
            "SUPERMERCADO, HIPERMERCADO, CRIANÇA, MOBILIDADE REDUZIDA, ADAPTAÇÃO, CRIANÇAS COM NECESSIDADES ESPECIAIS, CARRINHO DE COMPRA",
        },
        {
          título: "Projeto de lei 581/2016",
          link: "http://www.al.sp.gov.br/propositura?id=1323579",
          autor: "Jorge Wilson Xerife do Consumidor",
          etapa: "PAUTA",
          ementa:
            "Dispõe sobre a comercialização de produtos não disponíveis em estoque, e dá outras providências.",
          indexadoresnorma: "PROIBIÇÃO, COMERCIALIZAÇÃO, INTERNET, ESTOQUE, PRODUTOS, INDISPONÍVEL",
        },
        {
          título: "Projeto de lei 580/2016",
          link: "http://www.al.sp.gov.br/propositura?id=1323286",
          autor: "Marcia Lia",
          etapa: "PAUTA",
          ementa:
            "Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.",
          indexadoresnorma:
            "NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA",
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
