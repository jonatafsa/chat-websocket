import wss from "./server";

const data: any = [];

function updateData(onmessage: any) {
  data.push(onmessage);
  console.log(onmessage);

  wss.broadcast(data);
}

export default updateData;
