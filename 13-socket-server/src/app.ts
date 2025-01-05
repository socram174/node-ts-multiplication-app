import { createServer } from 'http';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import { WssService } from './presentation/services/wss.services';


(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT,
  });

  const httpServer = createServer(server.app);// same config as the express app, they are compatible
  WssService.initWss({server: httpServer});

  server.setRoutes( AppRoutes.routes );

  //server.start();

  httpServer.listen(envs.PORT, ()=>{
    console.log(`Server running on port: ${envs.PORT}`);
  });
}