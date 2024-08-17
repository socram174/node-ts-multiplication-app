import { CronService } from "./cron-service";


describe('CronService', () => {

    const mockTick = jest.fn();



    test('should create a job', (done) => {

        const job = CronService.createJob('* * * * * *', mockTick);

        setTimeout(()=>{

            expect( mockTick).toHaveBeenCalledTimes(2);
            job.stop();

            done();// done is a callback that tells jest that the test is done. se espera que se llame para que el test termine

        },2000);
    });
});