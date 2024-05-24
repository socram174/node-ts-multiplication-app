import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDatasource } from "./log.datasource";


describe('log.datasource.ts LogDatasource', () => { 

    const newLog = new LogEntity({
        origin: 'log.datasource.test.ts',
        message: 'test-message',
        level: LogSeverityLevel.low
    });

    class MockLogDatasource implements LogDatasource{ // Lo que importa es que MockLogDatasource implemente los métodos de LogDatasource
        async saveLog(log: LogEntity): Promise<void> {
            return;
        }
        async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
            return [newLog];
        }

    }



    test('should test the abstract class', async () => {

        const mockLogDatasource = new MockLogDatasource(); // no se puede instanciar una clase abstracta de LogDatasource, pero si una clase que la implemente

        expect( mockLogDatasource ).toBeInstanceOf( MockLogDatasource);
        expect( typeof mockLogDatasource.saveLog ).toBe( 'function' );
        expect( typeof mockLogDatasource.getLogs ).toBe( 'function' );

        //console.log(typeof mockLogDatasource.getLogs);

        await mockLogDatasource.saveLog(newLog);
        const logs = await mockLogDatasource.getLogs( LogSeverityLevel.high);
        expect( logs ).toHaveLength(1);
        expect( logs[0] ).toBeInstanceOf( LogEntity );
        

    });
 })