// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import { TextProcessorFluentApi } from "./textProcessorFluentAPI.js";

export class TextProcessorFacade {
  #textProcessorFluentAPI;
  constructor({ TextProcessorApi }) {
    this.#textProcessorFluentAPI = TextProcessorApi;
  }

  getProjectsFromCSV() {
    return this.#textProcessorFluentAPI
      .extractHeaders()
      .splitContentKeys()
      .createRawObject()
      .mapProjects()
      .build();
  }
}
