const express = require("express");

const readerController = require("../controllers/reader");
const router = express.Router();

router
.route('/')
.post( readerController.createReader)
.get( readerController.getReaders);

router
.route('/:id')
.get(readerController.getReaderById)
.patch( readerController.updateReader)
.delete( readerController.deleteReader);

module.exports = router;
