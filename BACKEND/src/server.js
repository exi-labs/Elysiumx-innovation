const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());

app.get("/hello", (req, res) => {
  const name = req.cookies.name;
  res.cookie("name", "jay", {path: "/hello"});
  res.send(`hello ${name} world of the Elysium`);
});

app.get("/random", (req, res) => {
  res.send("i am random page testing time ! ");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(` server app listening on port ${PORT}`);
});
