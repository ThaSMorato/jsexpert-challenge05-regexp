// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

import { evaluateRegex } from "./util.js";
import { Project } from "./project.js";

export class TextProcessorFluentApi {
  #content;

  constructor(content) {
    this.#content = content;
  }

  extractHeaders() {
    const matchHeaders = evaluateRegex(/(título)(.*)\r\n/);
    const headers = this.#content.match(matchHeaders)[0];

    this.#content = {
      headers,
      content: this.#content.replace(matchHeaders, ""),
    };

    return this;
  }

  splitContentKeys() {
    const splitKey = evaluateRegex(/;/gim);
    const splitLineKey = evaluateRegex(/\r\n/gim);

    const splitedHeaders = this.#content.headers
      .split(splitKey)
      .filter((item) => !item.match(splitLineKey));

    const splitedContent = this.#content.content
      .split(splitLineKey)
      .map((line) => line.split(splitKey).filter((item) => item.length > 0));

    this.#content = {
      headers: splitedHeaders,
      content: splitedContent,
    };

    return this;
  }

  createRawObject() {
    const mapFunction = (itemArray) => {
      return itemArray.reduce((prev, current, currentIndex) => {
        return {
          ...prev,
          [this.#content.headers[currentIndex]]: current,
        };
      }, {});
    };

    this.#content = {
      content: this.#content.content.map(mapFunction),
    };

    return this;
  }

  mapProjects() {
    this.#content = this.#content.content.map((content) => new Project(content));

    return this;
  }

  build() {
    return this.#content;
  }
}
