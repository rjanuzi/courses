import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import db from "./gateways/db.js";

const PORT = process.env.port | 80;
const CURRENT_FOLDER = url.fileURLToPath(import.meta.url);
const PUBLIC_FOLDER = path.join(CURRENT_FOLDER, "../..", "public");

/* Direct error and connection message to console */
db.on("error", console.error.bind(console, "DB Connection Error:"));
db.once("open", () => {
  console.log("DB Connected!");
});

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

export default io;
