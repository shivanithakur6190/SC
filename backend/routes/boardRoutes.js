const router = require("express").Router();
const Board = require("../models/Board");

router.post("/", async (req, res) => {
  const board = new Board({ title: req.body.title });
  await board.save();
  res.json(board);
});

router.get("/", async (req, res) => {
  const boards = await Board.find();
  res.json(boards);
});

module.exports = router;