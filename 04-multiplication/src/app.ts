import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

//console.log(process.argv);

//console.log(yarg.b);

(async () => {
    await main();
})(); //Funcion anonima autoinvocada, tambien puede ser async


async function main() {

    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;

    ServerApp.run({base, limit, showTable, fileName, fileDestination });
}

//Comando de ayuda: npx ts-node src/app --help















// console.log(process.argv);

// const [tsnode, app, ...args] = process.argv;

// console.log(args);

//Formas de mandar argumentos en los comandos 
//node dist/app.js --base 10 -l=100 --file=hola.txt -s