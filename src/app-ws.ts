import WebSocket from "ws";
import updateData from "./update-data";

function onError(ws: any, err: any) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws: any, data: any) {
  // console.log(`onMessage: ${data}`);
  ws.send(`onMessage: ${data}`);
  updateData(JSON.parse(data));
}

function onConnection(ws: any, req: any) {
  ws.on("message", (data: any) => onMessage(ws, data));
  ws.on("error", (error: any) => onError(ws, error));
  console.log(`onConnection: Conexão aberta com o servidor`);
}

function broadcast(this: any, jsonObject: any) {
  if (!this.clients) return;
  this.clients.forEach((client: any) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(jsonObject));
    }
  });
}

export default function Server(server: any) {
  const wss: any = new WebSocket.Server({
    server,
  });

  wss.on("connection", onConnection);
  wss.broadcast = broadcast;

  console.log(`App Web Socket Server is running!`);
  return wss;
}
