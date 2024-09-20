import { Server } from "socket.io";

global.socketConnection = null;

export const createSocketGateway = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.on("message", (message) => {
      //Test message from user client
      console.log(message);
    });
    socket.on("gameRoom", (arg) => {
      socket.join(arg.name);
    });
  });
};
