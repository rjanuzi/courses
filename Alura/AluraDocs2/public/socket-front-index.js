import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

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
