const { Reader } = require("../models");

const create = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};

module.exports = { create };
