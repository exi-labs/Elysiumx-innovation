const express = require("express");
const router = express.Router();
router.get("/test-error", (req, res) => {
  throw new Error("Testing error middleware");
});

module.exports = router;
