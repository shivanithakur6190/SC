const router = require("express").Router();
const Card = require("../models/Card");

router.post("/", async (req, res) => {
  const card = new Card(req.body);
  await card.save();
  res.json(card);
});

router.get("/:listId", async (req, res) => {
  const cards = await Card.find({ listId: req.params.listId });
  res.json(cards);
});

module.exports = router;