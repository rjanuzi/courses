import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("name");

const textoEditor = document.getElementById("editor-text");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
const usersListElem = document.getElementById("connected_users");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

function processSuccessAuth(payloadToken) {
  selecionarDocumento({ nomeDocumento, userName: payloadToken.payload });
}

function updateUsersList(usersList) {
  usersListElem.innerHTML = "";
  usersList.forEach((user) => {
    usersListElem.innerHTML += `<li class="list-group-item">${user}</li>`;
  });
}

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({
    text: textoEditor.value,
    nomeDocumento,
  });
});

function atualizaTextoEditor(text) {
  textoEditor.value = text;
}

botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocumento(nomeDocumento);
});

function alertarERedirecionar(name) {
  if (name === nomeDocumento) {
    alert(`Documento ${name} excluído!`);
    window.location.href = "/";
  }
}

export {
  atualizaTextoEditor,
  alertarERedirecionar,
  processSuccessAuth,
  updateUsersList,
};
