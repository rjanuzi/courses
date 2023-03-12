import mongoose from "mongoose";
import fs from "fs";

const DB_CONFIG_PATH = "./src/config/db-config.json";

function getMongoDbUri() {
  const dbConfig = JSON.parse(fs.readFileSync(DB_CONFIG_PATH));
  return `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.db}`;
}

const URI = getMongoDbUri();

mongoose.connect(URI);

const db = mongoose.connection;

export default db;
