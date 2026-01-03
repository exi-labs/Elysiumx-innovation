const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

<<<<<<< Updated upstream
const app = express();
app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
  res.send("hello world of the Elysium");
});
=======
const app = require("./app");
>>>>>>> Stashed changes

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
