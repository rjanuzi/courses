import { SESSION_COOKIE, setCookie } from "../utils/cookies.js";
const socket = io();

function emitAuthUser(user_data) {
  socket.emit("auth_usuario", user_data);
}

socket.on("auth_sucesso", (tokenJwt) => {
  setCookie(SESSION_COOKIE, tokenJwt);
  alert("Autenticação realizada com sucesso!");
  window.location.href = "/";
});
socket.on("auth_erro", () => alert("Erro ao autenticar!"));
socket.on("user_not_found", () => alert("Usuário não encontrado!"));

export default emitAuthUser;
