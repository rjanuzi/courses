import { randomBytes, scryptSync } from "crypto";

const RANDOM_BYTES_SIZE = 16;
const HASH_SIZE = 64;

function criaHashESalSenha(pass) {
  const salSenha = randomBytes(RANDOM_BYTES_SIZE).toString("hex");
  const hashSenha = scryptSync(pass, salSenha, HASH_SIZE).toString("hex");

  return { hashSenha, salSenha };
}

export { criaHashESalSenha };
