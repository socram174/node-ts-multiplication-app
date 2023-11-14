import fs from 'fs';

export interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(
        /** repository: StorageRepository */

    ){}

    execute({ 
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table'
    }: Options): boolean{

        try {

            fs.mkdirSync(fileDestination, { recursive: true }); // Recursivo crea las carpetas de mas adentro si es que estan en la ruta. Ej: outputs/tables/1
            fs.writeFileSync(`${fileDestination}/${ fileName }.txt`, fileContent);
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }



    }
}