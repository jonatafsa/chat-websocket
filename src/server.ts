import app from "./app";
import appWs from "./app-ws";

const server = app.listen(process.env.PORT || 3333, () =>
  console.log(`App Express is running in port ${process.env.PORT}!`)
);

console.log(typeof server);

const wss = appWs(server);

// setInterval(() => {
//   wss.broadcast({ message: Math.random() });
// }, 10000);

export default wss;
