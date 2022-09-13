import { readFile, writeFile } from 'fs/promises'
const readingFile = await readFile('./csv/teste.csv');
console.log(readingFile);

