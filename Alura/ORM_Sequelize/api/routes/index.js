const bodyParser = require("body-parser");
const peopleRouter = require("./peopleRouter");
const levelsRouter = require("./levelsRouter");
const classesRouter = require("./classesRouter");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello World!" });
  });
  app.use(peopleRouter);
  app.use(levelsRouter);
  app.use(classesRouter);
};
