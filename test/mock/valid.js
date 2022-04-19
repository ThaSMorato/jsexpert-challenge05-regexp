/* 
Nota:
Os seguintes valores de teste contém:
- Headers válidos
- 1 exemplo de registro com todos os valores corretos
- 1 exemplo de registro com 2 autores (separados por vírgula)
- 1 exemplo de registro sem o campo `indexadoresnorma`

E devem ser o suficiente para testar todos os cenários possíveis de registros no CSV fornecido. :)

*/

import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const csvDir = join(__dirname, "./projeto-de-leimin.csv");

const dataBuffer = await readFile(csvDir);
const data = dataBuffer.toString();

export default data;
/* 
Nota extra + Dica do Wells: O CSV original tem mais "desafios" (leia-se "dificuldades de implementação por má formatação do CSV") que foram 
abstraídos na confecção desse desafio principal (leia-se "salvei vocês de lidar com isso, denada 😂"), 
já que o foco desse desafio é usar expressões regulares, e não enlouquecer se perguntando "por que raios nenhum CSV com dados públicos 
vem sequer com o Charset configurado direito?" (não leia-se "Wells fala com propriedade sobre essa parte pq já trabalhou com isso")

Maaaaas, se por ventura, você quiser se aventurar em mais casos que podem ser tratados como exemplo aqui, e quiser 
_pegar o CSV original_ no link mencionado no README do desafio, baixar e tratar os erros possíveis que vem dele, aqui vão algumas dicas:
- Charset incorreto que precisa ser convertido
- Quebra de linha em lugares errados
- Excesso de `;` e `\n`
- Despadronização de urls
*/
