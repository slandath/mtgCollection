const { Router } = require("express");
const countroller = require("./countroller");

const router = Router();

router.get("/", countroller.getCards);
router.post("/", countroller.addCard);
router.get("/:name", countroller.findCard);
router.put("/", countroller.updateCard);
router.delete("/:id", countroller.removeCard);
router.patch("/:id", countroller.patchCard);

module.exports = router;
