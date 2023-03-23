import emitAddDocument from "./socket-front-index.js";

const documentsList = document.getElementById("documents-list");
const form = document.getElementById("form-add-document");
const inputDocument = document.getElementById("input-document");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emitAddDocument(inputDocument.value);
});

function insertDocumentToList(documentName) {
  documentsList.innerHTML += `
                                <a
                                    href="document.html?name=${documentName}"
                                    class="list-group-item list-group-item-action"
                                >
                                ${documentName}
                                </a>
                            `;
}

export default insertDocumentToList;
