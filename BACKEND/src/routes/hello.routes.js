const express = require("express");
const router = express.Router();
router.get("/hello", (req, res) => {
  const name = req.cookies.name || "Guest";
  res.cookie("name", "jay", {path: "/hello"});
  res.send(`hello ${name} world of the Elysium`);
});

module.exports = router;
