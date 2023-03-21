/* It uses the <script src="/socket.io/socket.io.js"></script> tag at
page*/
/* io() function will stablish the connection with the server, sending 
the "connection" event. */
import { updateTextOnEditor } from "./document.js";
const socket = io();

function selectDocument(documentName) {
  socket.emit("select_document", documentName, (initialText) => {
    updateTextOnEditor(initialText);
  });
}

function emitTextFromEditor(data) {
  socket.emit("text_editor_event", data);
}

function emitDeleteDocument(documentName) {
  socket.emit("delete-document-event", documentName, (result) => {
    console.log(result);
    window.location.href = "/";
  });
}

socket.on("text_editor_clients", (text) => {
  updateTextOnEditor(text);
});

export { selectDocument, emitTextFromEditor, emitDeleteDocument };
