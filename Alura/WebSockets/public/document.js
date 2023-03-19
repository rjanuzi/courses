import { selectDocument, emitTextFromEditor } from "./socket-front-document.js";

/* Search from window.location has the page URL with all params */
const params = new URLSearchParams(window.location.search);

/* The page has the name param on the URL */
const documentName = params.get("name");

const textEditor = document.getElementById("text-editor");
const documentTitle = document.getElementById("document-title");

documentTitle.textContent = documentName || "Document without title";
selectDocument(documentName);

textEditor.addEventListener("keyup", () => {
  emitTextFromEditor({
    text: textEditor.value,
    documentName: documentName,
  });
});

function updateTextOnEditor(text) {
  textEditor.value = text;
}

export { updateTextOnEditor };
