import express from "express";
import url from "url";
import path from "path";

const PORT = process.env.port | 80;
const CURRENT_FOLDER = url.fileURLToPath(import.meta.url);
const PUBLIC_FOLDER = path.join(CURRENT_FOLDER, "../..", "public");

const app = express();

/* Make express all in "public" directory be server as static files */
app.use(express.static(PUBLIC_FOLDER));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
