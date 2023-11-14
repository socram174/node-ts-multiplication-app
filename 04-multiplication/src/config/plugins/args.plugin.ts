import yargs from "yargs";
import { hideBin } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv))// Permite acceder directo a las flags, por ejemplo yarg.b
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true, //Es obligatorio mandar el argumento o da error
        describe: 'Multiplication table base'
    })
     .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
     })
     .option('s',{ //Si se manda -s da true y si no se manda da false
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
     })
     .option('n',{
         alias: 'name',
         type: 'string',
         default: 'multiplication-table',
         describe: 'File name'
     })
     .option('d',{
      alias: 'destination',
      type: 'string',
      default: 'outputs',
      describe: 'File destination'
  })
     .check((argv, options) => {

        if ( argv.b < 1 ) throw 'Error: base must be greater than 0';
        return true;
     })
    .parseSync();//Solo se usan tareas sincronas
