import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
--------------------------
    Tabla del ${base}
--------------------------
`;

for( let i = 1; i <= limit; i++){
    outputMessage += `${base} x ${i} = ${base * i}\n`;
};

outputMessage = headerMessage + outputMessage;

if ( showTable ) console.log(outputMessage);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true }); // Recursivo crea las carpetas de mas adentro si es que estan en la ruta. Ej: outputs/tables/1

fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outputMessage);

console.log("File created!");


