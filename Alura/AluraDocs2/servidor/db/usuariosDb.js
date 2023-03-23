import { usuariosColecao } from "./dbConnect.js";
import { criaHashESalSenha } from "../utils/criaHashESalSenha.js";

function encontrarUsuario(user_name) {
  return usuariosColecao.findOne({ user_name });
}

function cadastrarUsuario({ user_name, pass }) {
  const { hashSenha, salSenha } = criaHashESalSenha(pass);
  return usuariosColecao.insertOne({ user_name, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
