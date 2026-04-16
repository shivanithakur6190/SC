const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
mongoose.connect("process.env.MONGO_URI")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/boards", require("./routes/boardRoutes"));
app.use("/lists", require("./routes/listRoutes"));
app.use("/cards", require("./routes/cardRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));