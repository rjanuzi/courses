import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const PORT = process.env.port | 80;
const CURRENT_FOLDER = url.fileURLToPath(import.meta.url);
const PUBLIC_FOLDER = path.join(CURRENT_FOLDER, "../..", "public");

const app = express();

/* Make express all in "public" directory be server as static files */
app.use(express.static(PUBLIC_FOLDER));

/* Continue to serve the static pages */
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* Create the server to wait for WebSockets connections. */
const io = new Server(httpServer);

/* When the event "connection" occurs, run the desired funtion. */
io.on("connection", () => {
  console.log("A new client has connected!");
});
