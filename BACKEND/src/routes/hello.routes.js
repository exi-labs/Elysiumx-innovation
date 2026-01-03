const express = require("express");
const {sayHello} = require("../controllers/hello.controller");
const router = express.Router();

router.get("/hello", sayHello);

module.exports = router;
