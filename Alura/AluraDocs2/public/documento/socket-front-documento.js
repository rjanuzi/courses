import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";
import { SESSION_COOKIE, getCookie } from "../utils/cookies.js";

const socket = io("/users", {
  /* "auth" is a property from socket.io */
  auth: {
    token: getCookie(SESSION_COOKIE),
  },
});

/* connect_error is a standard event from socket.io */
socket.on("connect_error", (error) => {
  alert(error);
  window.location.href = "/login";
});

function selecionarDocumento(name) {
  socket.emit("selecionar_documento", name, (text) => {
    atualizaTextoEditor(text);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (text) => {
  atualizaTextoEditor(text);
});

function emitirExcluirDocumento(name) {
  socket.emit("excluir_documento", name);
}

socket.on("excluir_documento_sucesso", (name) => {
  alertarERedirecionar(name);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
