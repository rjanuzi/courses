import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastro(socket, io) {
  socket.on("cadastrar_usuario", async (user_data) => {
    const user = await encontrarUsuario(user_data.user_name);

    if (user === null) {
      const result = await cadastrarUsuario(user_data);

      if (result.acknowledged) {
        socket.emit("cadastro_sucesso");
      } else {
        socket.emit("cadastro_erro");
      }
    } else {
      socket.emit("usuario_ja_existente");
    }
  });
}

export default registrarEventosCadastro;
