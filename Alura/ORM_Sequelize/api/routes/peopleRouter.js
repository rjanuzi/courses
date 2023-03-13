const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

/* People routes */
router.get("/people", PeopleController.getAllPeople);
router.get("/people/byName", PeopleController.getPeopleByName);
router.get("/people/:id", PeopleController.getPersonById);
router.post("/people", PeopleController.createPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.deletePerson);

/* Subscriptions Routes */
router.get(
  "/people/:studentId/subscriptions/:subscriptionId",
  PeopleController.getOneSubscription
);
router.post(
  "/people/:studentId/subscriptions",
  PeopleController.createSubcription
);
router.put(
  "/people/:studentId/subscriptions/:subscriptionId",
  PeopleController.updateSubscription
);
router.delete(
  "/people/:studentId/subscriptions/:subscriptionId",
  PeopleController.deleteSubscription
);

module.exports = router;
