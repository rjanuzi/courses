import io from "./servidor.js";
import inicio from "./registrarEventos/inicio.js";
import documento from "./registrarEventos/documento.js";
import cadastro from "./registrarEventos/cadastro.js";

io.on("connection", (socket) => {
  inicio(socket, io);
  documento(socket, io);
  cadastro(socket, io);
});
