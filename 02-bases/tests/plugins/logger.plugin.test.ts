import { describe, expect, it, test, jest } from '@jest/globals';
import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {

    test('buildLogger should return a function logger', () => {

        const logger = buildLogger('test');

        expect( typeof logger.log ).toBe('function');
        expect( typeof logger.error ).toBe('function');

    });

    test('logger.log should log a message',() => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        expect( winstonLoggerMock ).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({ //Se espera objeto que contenga minimo lo que se le pasa
                level: 'info',
                message,
                service,
            }),
        );

    });



});