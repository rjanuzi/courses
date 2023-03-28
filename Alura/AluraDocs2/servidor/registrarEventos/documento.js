import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";

import { addConnection, removeConnection } from "../utils/connectionsDocs.js";

function registrarEventosDocumento(socket, io) {
  socket.on("selecionar_documento", async (inputData, devolverTexto) => {
    const documento = await encontrarDocumento(inputData.nomeDocumento);

    if (documento) {
      socket.join(inputData.nomeDocumento);

      const usersInDoc = addConnection({
        docName: inputData.nomeDocumento,
        userName: inputData.userName,
      });

      /* Send the updated list to all users in document, including who
      is entering. */
      io.to(inputData.nomeDocumento).emit("users_in_doc", usersInDoc);

      devolverTexto(documento.text);
    }

    /* Listen events only for the sockets that emitted a specific document */
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

    socket.on("disconnect", () => {
      let usersInDoc = removeConnection(
        inputData.nomeDocumento,
        inputData.userName
      );

      /* Send the updated list to all users in document, including who
      is entering. */
      io.to(inputData.nomeDocumento).emit("users_in_doc", usersInDoc);
    });
  });
}

export default registrarEventosDocumento;
