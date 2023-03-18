const { Book } = require("../models");
const { createItem, getAllItems, getItemById, updateItem, deleteItem } = require("./helper");

//refactor of create book

const createBook = (req,res) => createItem(res, "book", req.body);

//refactor of get books

const getBooks = (req,res) => getAllItems(res, "book");

//refactor of get book by id

const getBookById = (req,res) => getItemById(res, "book", req.params.id);

//refactor of update book

const updateBook = (req,res) => updateItem(res, "book", req.body, req.params.id);

//refactor of delete book

const deleteBook = (req,res) => deleteItem(res, "book", req.params.id);


module.exports = {  deleteBook, createBook, getBooks, getBookById, updateBook };
