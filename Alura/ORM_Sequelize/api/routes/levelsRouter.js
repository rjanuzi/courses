const { Router } = require("express");
const LevelsController = require("../controllers/LevelsController");

const router = Router();

router.get("/levels", LevelsController.getAllLevels);
router.get("/levels/:id", LevelsController.getLevelById);
router.post("/levels", LevelsController.createLevel);
router.put("/levels/:id", LevelsController.updateLevel);
router.delete("/levels/:id", LevelsController.deleteLevel);
router.post("/levels/restore/:id", LevelsController.restoreLevel);

module.exports = router;
