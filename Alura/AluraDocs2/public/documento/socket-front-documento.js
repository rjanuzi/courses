import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

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
