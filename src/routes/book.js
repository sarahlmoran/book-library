const express = require("express");
const bookController = require("../controllers/book");

const router = express.Router();

router
.route("/")
.post( bookController.createBook)
.get( bookController.getBooks);

router
.route("/:id")
.get( bookController.getBookById)
.patch( bookController.updateBook)
.delete( bookController.deleteBook);

module.exports = router;
