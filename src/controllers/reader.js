const { Reader } = require("../models");
const { getAllItems, createItem, getItemById, updateItem, deleteItem } = require("./helper");

//refactoring of create reader

const createReader = (req,res) => createItem(res, 'reader', req.body);



//refactoring of get all readers

const getReaders = (req,res) => getAllItems(res, 'reader');


//refactoring of get reader by id 

const getReaderById = (req,res) => getItemById(res, 'reader', req.params.id);

//refactoring of update reader

const updateReader = (req,res) => updateItem(res, 'reader', req.body, req.params.id);

//refactoring of delete reader

const deleteReader = (req,res) => deleteItem(res, 'reader', req.params.id)

/*const destroy = async (req, res) => {
  try {
    const readerId = req.params.id;
    const validId = await Reader.findByPk(readerId);
    const deletedRows = await Reader.destroy({ where: { id: readerId } });

    if (!validId) {
      res.status(404).json({ error: "The reader could not be found." });
    }

    res.status(200).json(deletedRows);
  } catch (e) {
    res.status(500).json(e.message);
  }
};*/

module.exports = { /*   destroy,*/ getReaders, createReader, getReaderById, updateReader, deleteReader };
