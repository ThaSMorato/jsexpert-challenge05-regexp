import { jest } from "@jest/globals";

export class TextProcessorApiMock {
  constructor(text) {
    this.text = text;
    this.extractHeaders = jest.fn().mockReturnValue(this);
    this.splitContentKeys = jest.fn().mockReturnValue(this);
    this.createRawObject = jest.fn().mockReturnValue(this);
    this.mapProjects = jest.fn().mockReturnValue(this);
    this.build = jest.fn().mockReturnValue(this.text);
  }
}
