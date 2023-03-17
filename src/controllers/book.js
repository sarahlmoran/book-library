const { Book } = require("../models");

const create = async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(200).json(newBook);
    } catch (e) {
      res.status(500).json(e.message);
    }
  };

  module.exports = {create};