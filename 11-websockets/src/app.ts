import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

    //console.log(ws);

    console.log('Client connected');

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    //console.log('Desde el cliente: ', data);

    const payload = JSON.stringify({
      type: 'custom-message',
      payload: data.toString()
    });
    //ws.send(JSON.stringify(payload));

    // Broadcast to all clients
    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(payload, { binary: false });
    //   }
    // });

    // Broadcast to all clients except the sender
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(payload, { binary: false });
      }
    });

  });

  //ws.send('Hola desde el servidor!');

  ws.on("close",()=>{
    console.log('Client disconnected');
  })
});

console.log('Server running on port http://localhost:3000');