const { Router } = require("express");
const countroller = require("./countroller");

const router = Router();

router.get("/cards", countroller.getCards);
router.post("/cards", countroller.addCard);
router.get("/cards/:name", countroller.findCard);
router.put("/cards/", countroller.updateCard);
router.delete("/cards/:id", countroller.removeCard);
router.patch("/cards/:id", countroller.patchCard);
router.get("/prices", countroller.updatePrices)

module.exports = router;
