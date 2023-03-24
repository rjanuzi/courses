import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io) {
  socket.on("auth_usuario", async ({ user_name, pass }) => {
    const user = await encontrarUsuario(user_name);

    if (user) {
      const auth = autenticarUsuario(pass, user);

      if (auth) {
        const tokenJwt = gerarJwt(user_name);
        socket.emit("auth_sucesso", tokenJwt);
      } else {
        socket.emit("auth_erro");
      }
    } else {
      socket.emit("user_not_found");
    }
  });
}

export default registrarEventosLogin;
