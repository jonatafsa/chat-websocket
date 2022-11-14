const Websocket = new WebSocket("ws://localhost:3333");

Websocket.onopen = () => {
  console.log("Connected to websocket");
};

Websocket.onmessage = (event) => {
  console.log(event.data);
};

export default Websocket;
