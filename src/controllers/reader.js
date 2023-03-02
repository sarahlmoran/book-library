const { Reader } = require("../models");

const create = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(200).json(newReader);
};

const readers = async (req, res) => {
  const allReaders = await Reader.findAll();
  res.status(200).json(allReaders);
};

module.exports = { create, readers };
