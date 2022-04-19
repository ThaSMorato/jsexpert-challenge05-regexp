// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
// Dica do wells: no lugar da chamada do PDF parser, um simples `.toString()` resolve, já que nós é que implementaremos o "CSV parser"

import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { TextProcessorFacade } from "./textProcessorFacade.js";
import { TextProcessorFluentApi } from "./textProcessorFluentAPI.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const csvDir = join(__dirname, "../docs/projeto-de-lei.csv");

const dataBuffer = await readFile(csvDir);
const data = dataBuffer.toString();

const api = new TextProcessorFluentApi(data);
const instance = new TextProcessorFacade({ TextProcessorApi: api });
const projects = instance.getProjectsFromCSV();

console.log(projects);
