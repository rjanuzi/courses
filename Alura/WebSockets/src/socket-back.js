import io from "./server.js";
import liveDocuments from "./models/LiveDocument.js";

async function getCurrentState(documentName) {
  let liveDocument = await liveDocuments.findOne({ name: documentName }).exec();

  /* If when someone joins, check if we already have some text and update everywhere */
  if (!liveDocument) {
    liveDocument = new liveDocuments({
      name: documentName,
      text: "",
    });

    liveDocument = await liveDocument.save();
  }

  return liveDocument.text;
}

async function updateCurrentState(documentName, newText) {
  await liveDocuments
    .updateOne(
      { name: documentName },
      {
        name: documentName,
        text: newText,
      }
    )
    .exec();
}

io.on("connection", (socket) => {
  socket.on("get-documents", async (returnDocuments) => {
    const documents = await liveDocuments.find();
    returnDocuments(documents);
  });

  socket.on("add-document", async (documentName, callback) => {
    try {
      let newDocument = new liveDocuments({ name: documentName, text: "" });
      let result = await newDocument.save();
      callback(result.ackowledge);
    } catch (e) {
      callback(false);
    }
  });

  socket.on("delete-document-event", async (documentName, callback) => {
    let result = await liveDocuments.deleteOne({ name: documentName });
    callback(result);
  });

  socket.on("select_document", (documentName, callback) => {
    /* Add the socket to the sockets "room" that share the documentName */
    socket.join(documentName);

    /* Automatic send data back on socket openning. */
    getCurrentState(documentName).then((documentText) => {
      callback(documentText);
    });
  });

  socket.on("text_editor_event", ({ text, documentName }) => {
    /* Send to every socket client, including who triggered */
    /* io.emit("text_editor_clients", text); */
    /* Don't send to who triggered the event, but for all other sockets */
    /* socket.broadcast.emit("text_editor_clients", text); */

    /* Update currentState */
    updateCurrentState(documentName, text);

    /* Send only to the sockets at the same "room" called documentName */
    socket.to(documentName).emit("text_editor_clients", text);
  });

  socket.on("disconnect", (reason) => {
    console.log(`Client ${socket.id} disconnected! (Reason: ${reason})`);
  });
});
