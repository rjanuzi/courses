const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

/* People routes */
router.get("/people", PeopleController.getActivePeople);
router.get("/people/all", PeopleController.getAllPeople);
router.get("/people/byName", PeopleController.getPeopleByName);
router.get("/people/:id", PeopleController.getPersonById);
router.post("/people", PeopleController.createPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.post("/people/restore/:id", PeopleController.restorePerson);
router.post(
  "/people/inactivateStudent/:sudentId",
  PeopleController.inactivateStudent
);
router.delete("/people/:id", PeopleController.deletePerson);

/* Subscriptions Routes */
router.get(
  "/people/subscriptions/active/:classId",
  PeopleController.getSubscriptionsByClass
);
router.get(
  "/people/subscriptions/fullClasses/:classLimit",
  PeopleController.getFullClasses
);
router.get(
  "/people/subscriptions/:studentId",
  PeopleController.getSubscriptions
);
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
router.post(
  "/people/subscriptions/restore/:id",
  PeopleController.restoreSubscription
);

module.exports = router;
