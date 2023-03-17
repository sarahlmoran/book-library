const { Book } = require("../models");

const create = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(200).json(newBook);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const books = async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    res.status(200).json(allBooks);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const bookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByPk(bookId);

    if (!book) {
      res.status(404).json({ error: "The book could not be found" });
    }
    res.status(200).json(book);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const validId = await Book.findByPk(bookId);
    const book = await Book.update(req.body, { where: { id: bookId } });

    if (!validId) {
      res.status(404).json({ error: "The book could not be found" });
    }

    res.status(200).json(book);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const validId = await Book.findByPk(bookId);
    const deletedBook = await Book.destroy({ where: { id: bookId } });

    if (!validId) {
      res.status(404).json({ error: "The book could not be found" });
    }

    res.status(200).json(deletedBook);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

module.exports = { create, books, bookById, updateBook, deleteBook };
