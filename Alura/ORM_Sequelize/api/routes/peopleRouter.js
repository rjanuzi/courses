const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/people", PeopleController.getAllPeople);
router.get("/people/byName", PeopleController.getPeopleByName);
router.get("/people/:id", PeopleController.getPersonById);
router.post("/people", PeopleController.createPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.deletePerson);

module.exports = router;
