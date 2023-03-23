import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";

function registrarEventosDocumento(socket, io) {
  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.text);
    }
  });

  socket.on("texto_editor", async ({ text, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, text);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", text);
    }
  });

  socket.on("excluir_documento", async (name) => {
    const resultado = await excluirDocumento(name);

    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", name);
    }
  });
}

export default registrarEventosDocumento;
