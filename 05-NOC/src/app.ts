import { Server } from "./presentation/server";



(async ()=>{
    main();
})();//Función anónima autoinvocada


function main(){
    Server.start();
};