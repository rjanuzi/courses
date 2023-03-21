import insertDocumentToList from "./index.js";

const socket = io();

socket.emit("get-documents", (documents) => {
  documents.forEach((document) => {
    insertDocumentToList(document.name);
  });
});

function emitAddDocument(documentName) {
  socket.emit("add-document", documentName, (result) => {
    if (result != false) {
      window.location.href = "/";
    } else {
      alert("Algum erro ao adicionar o documento.");
    }
  });
}

export default emitAddDocument;
