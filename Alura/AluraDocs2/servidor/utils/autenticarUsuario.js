import { criaTestHash } from "./criaHashESalSenha.js";
import { timingSafeEqual } from "crypto";

function autenticarUsuario(pass, usuario) {
  const hashTest = Buffer.from(criaTestHash(pass, usuario.salSenha), "hex");
  const hashReal = Buffer.from(usuario.hashSenha, "hex");
  const auth = timingSafeEqual(hashTest, hashReal);

  return auth;
}

export default autenticarUsuario;
