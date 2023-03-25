import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";
import { SESSION_COOKIE, getCookie } from "./utils/cookies.js";

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

socket.emit("obter_documentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.name);
  });
});

function emitirAdicionarDocumento(name) {
  socket.emit("adicionar_documento", name);
}

socket.on("adicionar_documento_interface", (name) => {
  inserirLinkDocumento(name);
});

socket.on("documento_existente", (name) => {
  alert(`O documento ${name} já existe!`);
});

socket.on("excluir_documento_sucesso", (name) => {
  removerLinkDocumento(name);
});

export { emitirAdicionarDocumento };
