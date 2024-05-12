interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
    
}

type SuccessCAllback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase{

    constructor(
        private readonly successCallback: SuccessCAllback,//readonly es un modificador de acceso que permite que el atributo solo pueda ser leido
        private readonly errorCallback: ErrorCallback
    ) {

    }

    public async execute( url: string):Promise<boolean>{

        try{
            const req = await fetch(url);
            if ( !req.ok){
                throw new Error( `Error on check service ${url}` );
            }

            this.successCallback();
            return true;
        } catch(error){

            console.error(`${error}`);

            this.errorCallback(`${error}`);

            return false;
        }

    }
}