const socket = io();

function emitRegisterUser(user_data) {
  socket.emit("cadastrar_usuario", user_data);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro ao cadastrar!"));
socket.on("usuario_ja_existente", () => alert("Usuario já existente!"));

export default emitRegisterUser;
