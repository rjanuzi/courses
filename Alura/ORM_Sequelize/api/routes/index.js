const bodyParser = require("body-parser");
const peopleRouter = require("./peopleRouter");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello World!" });
  });
  app.use(peopleRouter);
};
