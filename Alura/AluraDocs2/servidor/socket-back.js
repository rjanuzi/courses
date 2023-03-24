import "dotenv/config";
import inicio from "./registrarEventos/inicio.js";
import documento from "./registrarEventos/documento.js";
import cadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";

import io from "./servidor.js";

io.on("connection", (socket) => {
  cadastro(socket, io);
  registrarEventosLogin(socket, io);
  inicio(socket, io);
  documento(socket, io);
});
