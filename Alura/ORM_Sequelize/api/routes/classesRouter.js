const { Router } = require("express");
const ClassesController = require("../controllers/ClassesController");

const router = Router();

router.get("/classes", ClassesController.getClasses);
router.get("/classes/:id", ClassesController.getClassById);
router.post("/classes", ClassesController.createClass);
router.put("/classes/:id", ClassesController.updateClass);
router.delete("/classes/:id", ClassesController.deleteClass);
router.post("/classes/restore/:id", ClassesController.restoreClass);

module.exports = router;
