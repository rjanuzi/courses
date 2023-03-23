import {
  adicionarDocumento,
  encontrarDocumento,
  obterDocumentos,
} from "../db/documentosDb.js";

function registrarEventosInicio(socket, io) {
  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();

    devolverDocumentos(documentos);
  });

  socket.on("adicionar_documento", async (name) => {
    const documentoExiste = (await encontrarDocumento(name)) !== null;

    if (documentoExiste) {
      socket.emit("documento_existente", name);
    } else {
      const resultado = await adicionarDocumento(name);

      if (resultado.acknowledged) {
        io.emit("adicionar_documento_interface", name);
      }
    }
  });
}

export default registrarEventosInicio;
