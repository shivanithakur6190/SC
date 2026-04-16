const router = require("express").Router();
const List = require("../models/List");

router.post("/", async (req, res) => {
  const list = new List(req.body);
  await list.save();
  res.json(list);
});

router.get("/:boardId", async (req, res) => {
  const lists = await List.find({ boardId: req.params.boardId });
  res.json(lists);
});

module.exports = router;