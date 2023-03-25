import "dotenv/config";
import inicio from "./registrarEventos/inicio.js";
import documento from "./registrarEventos/documento.js";
import cadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import authUser from "./middlewares/authUser.js";

import io from "./servidor.js";

/* Define a namespace for logged clients */
const nspUsers = io.of("/users");

/* Add middleware to be executed before the "connection" event. */
nspUsers.use(authUser);
nspUsers.on("connection", (socket) => {
  inicio(socket, io);
  documento(socket, nspUsers);
});

/* Use the namespace "/" wich do not execute the auth middleware */
io.of("/").on("connection", (socket) => {
  cadastro(socket, io);
  registrarEventosLogin(socket, nspUsers);
});
