import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


export abstract class LogDatasource { // Una clase abstracta es una clase que no se puede instanciar, pero que otras clases pueden heredar.

    abstract saveLog( log: LogEntity ): Promise<void>;// Un método abstracto es un método que no tiene cuerpo y debe ser implementado por las subclases.
    abstract getLogs( severityLevel: LogSeverityLevel): Promise<LogEntity[]>;

}