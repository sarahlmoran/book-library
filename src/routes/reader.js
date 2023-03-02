const express = require("express");
const readerController = require("../controllers/reader");

const router = express.Router();

router.post("/", readerController.create);

router.get("/", readerController.readers);

module.exports = router;
