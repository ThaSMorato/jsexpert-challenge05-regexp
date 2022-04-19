import { expect, describe, it } from "@jest/globals";
import { TextProcessorFacade } from "../src/textProcessorFacade";
import { TextProcessorApiMock } from "./mock/textProcessorAPIMock";

describe("#TextProcessorFacade", () => {
  it("#getProjectsFromCSV => should call all API methods", () => {
    const text = "test text";
    const TextProcessorApi = new TextProcessorApiMock(text);

    const textProcessorFacade = new TextProcessorFacade({
      TextProcessorApi: TextProcessorApi,
    });

    textProcessorFacade.getProjectsFromCSV();

    expect(TextProcessorApi.extractHeaders).toBeCalled();
    expect(TextProcessorApi.createRawObject).toBeCalled();
    expect(TextProcessorApi.mapProjects).toBeCalled();
    expect(TextProcessorApi.splitContentKeys).toBeCalled();
    expect(TextProcessorApi.build).toBeCalled();
  });
});
