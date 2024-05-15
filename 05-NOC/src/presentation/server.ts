import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()// como ejemplo esto tambiem prodria ser un servicio de base de datos, como mongo, postgres, etc
);


export class Server {

    public static start(){ //Si no se indica que es publico, por defecto es publico, pero es buena practica indicarlo
        console.log("Server started...");

        //Mandar email
        
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => {
        //                 console.log(`${url} is ok.`);
        //             },
        //             (error) => console.error(error)
        //         ).execute(url);
        //         //new CheckService().execute('http://localhost:3000');
        //     }
        // );

    }
}

//Server.start(); //Se puede acceder a un metodo publico sin instanciar la clase, ya que es un metodo estatico