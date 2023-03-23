import { MongoClient } from "mongodb";

import fs from "fs";

const DB_CONFIG_PATH = "./config/db-config.json";
const dbConfig = JSON.parse(fs.readFileSync(DB_CONFIG_PATH));

function getMongoDbUri() {
  return `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.db}`;
}

const cliente = new MongoClient(getMongoDbUri());

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db(dbConfig.db);
  documentosColecao = db.collection("live_documents");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
