import emitAuthUser from "./socket-front-login.js";

const form = document.getElementById("form-login");

form.addEventListener("submit", (event) => {
  event.preventDefault(); /* Prevent page update */

  const user_name = form["input-usuario"].value;
  const pass = form["input-senha"].value;

  emitAuthUser({ user_name, pass });
});
