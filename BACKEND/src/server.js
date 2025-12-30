const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world of the Elysium");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` server app listening on port ${PORT}`);
});
