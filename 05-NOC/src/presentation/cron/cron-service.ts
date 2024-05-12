import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService { //Se aplico el patron adaptador
    static createJob(cronTime: CronTime, onTick: OnTick): CronJob{


        const job = new CronJob(cronTime, onTick);
        job.start(); // job.start() is mandatory here because of the fourth parameter set to false.
        // job.start() is optional here because of the fourth parameter set to true.
        return job;
    }
}