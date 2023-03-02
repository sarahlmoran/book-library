const express = require("express");
const readerController = require("../controllers/reader");
//const reader = require("../models/reader");

const router = express.Router();

router.post("/", readerController.create);

router.get("/", readerController.readers);

router.get("/:id", readerController.readersById);

router.patch("/:id", readerController.update);

router.delete("/:id", readerController.destroy);

module.exports = router;
