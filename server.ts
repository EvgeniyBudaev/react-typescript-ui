import { createServer } from "http";
import * as process from "process";
import cors from "cors";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { Server } from "socket.io";
import { SOCKET_RECEIVE_THEME, SOCKET_SEND_THEME } from "./src/constants";

const app = express();
console.log("[SERVER START]");

app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://127.0.0.1:3001",
      changeOrigin: true,
    }),
  );
}

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("[connection]");
  socket.on(SOCKET_SEND_THEME, (data) => {
    console.log("[server send data] ", data);
    socket.broadcast.emit(SOCKET_RECEIVE_THEME, data);
  });
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log("[SERVER IS RUNNING]");
  console.log(`Express server listening on port ${port}`);
});
