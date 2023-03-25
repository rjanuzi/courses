import { emitirAdicionarDocumento } from "./socket-front-index.js";

import { SESSION_COOKIE, getCookie, removeCookie } from "../utils/cookies.js";

const tokenJwt = getCookie(SESSION_COOKIE);

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", () => {
  removeCookie(SESSION_COOKIE);
  alert("User logout!");
  window.location.href = "/login";
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a
      href="/documento/index.html?name=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
