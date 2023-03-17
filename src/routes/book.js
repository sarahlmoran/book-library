const express = require("express");
const bookController = require("../controllers/book");

const router = express.Router();

router.post("/", bookController.create);

router.get("/", bookController.books);

router.get("/:id", bookController.bookById);

router.patch("/:id", bookController.updateBook);

router.delete("/:id", bookController.deleteBook);

module.exports = router;
