import emitRegisterUser from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (event) => {
  event.preventDefault(); /* Prevent page update */

  const user_name = form["input-usuario"].value;
  const pass = form["input-senha"].value;

  emitRegisterUser({ user_name, pass });
});
