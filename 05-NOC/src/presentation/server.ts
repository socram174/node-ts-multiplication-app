import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";


export class Server {

    public static start(){ //Si no se indica que es publico, por defecto es publico, pero es buena practica indicarlo
        console.log("Server started...");

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://www.google.com';
                new CheckService(
                    () => {
                        console.log(`${url} is ok.`);
                    },
                    (error) => console.error(error)
                ).execute(url);
                //new CheckService().execute('http://localhost:3000');
            }
        );

    }
}

//Server.start(); //Se puede acceder a un metodo publico sin instanciar la clase, ya que es un metodo estatico