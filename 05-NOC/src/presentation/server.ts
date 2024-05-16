import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()// como ejemplo esto tambiem prodria ser un servicio de base de datos, como mongo, postgres, etc
    //new MongoLogDatasource(),
    //new PostgresLogDatasource(),
);

const mongoLogRepository = new LogRepositoryImpl(
    //new FileSystemDatasource()// como ejemplo esto tambiem prodria ser un servicio de base de datos, como mongo, postgres, etc
    new MongoLogDatasource(),
    //new PostgresLogDatasource(),
);

const postgresLogRepository = new LogRepositoryImpl(
    //new FileSystemDatasource()// como ejemplo esto tambiem prodria ser un servicio de base de datos, como mongo, postgres, etc
    //new MongoLogDatasource(),
    new PostgresLogDatasource(),
);

const emailService = new EmailService();


export class Server {

    public static async start(){ //Si no se indica que es publico, por defecto es publico, pero es buena practica indicarlo
        console.log("Server started...");

        //todo: Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute([
        //          'correo1@gmail.com',
        //          'correo2@hotmail.com'
        // ])

        // emailService.sendEmailWithFileSystemLogs([
        //     'correo1@gmail.com',
        //     'correo2@hotmail.com'
        // ]);
        
        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckServiceMultiple(
        //             [fsLogRepository, postgresLogRepository, mongoLogRepository],
        //             () => {
        //                 console.log(`${url} is ok.`);
        //             },
        //             (error) => console.error(error)
        //         ).execute(url);
               
        //     }
        // );

    }
}

//Server.start(); //Se puede acceder a un metodo publico sin instanciar la clase, ya que es un metodo estatico