import { createServer } from "http";
import cors from "cors";
import express from "express";
import { Server } from "socket.io";
import { SOCKET_RECEIVE_THEME, SOCKET_SEND_THEME } from "./src/constants";

const app = express();

app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on(SOCKET_SEND_THEME, (data) => {
    socket.broadcast.emit(SOCKET_RECEIVE_THEME, data);
  });
});

const port = process.env.PORT || 3001;

httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
