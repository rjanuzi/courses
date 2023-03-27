import {
  alertarERedirecionar,
  atualizaTextoEditor,
  processSuccessAuth,
  updateUsersList,
} from "./documento.js";
import { SESSION_COOKIE, getCookie } from "../utils/cookies.js";

const socket = io("/users", {
  /* "auth" is a property from socket.io */
  auth: {
    token: getCookie(SESSION_COOKIE),
  },
});

socket.on("auth_success", processSuccessAuth);

/* connect_error is a standard event from socket.io */
socket.on("connect_error", (error) => {
  alert(error);
  window.location.href = "/login";
});

function selecionarDocumento(inputData) {
  socket.emit("selecionar_documento", inputData, (text) => {
    atualizaTextoEditor(text);
  });
}

socket.on("users_in_doc", updateUsersList);

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
