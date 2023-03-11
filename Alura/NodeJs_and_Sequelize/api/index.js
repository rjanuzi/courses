const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 80;

app.get("/test", (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
np