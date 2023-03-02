const { Reader } = require("../models");

const create = async (req, res) => {
  try {
    const newReader = await Reader.create(req.body);
    res.status(200).json(newReader);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const readers = async (req, res) => {
  try {
    const allReaders = await Reader.findAll();
    res.status(200).json(allReaders);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const readersById = async (req, res) => {
  try {
    const readerId = req.params.id;
    const reader = await Reader.findByPk(readerId);

    if (!reader) {
      res.status(404).json({ error: "The reader could not be found." });
    }
    res.status(200).json(reader);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const update = async (req, res) => {
  try {
    const readerId = req.params.id;
    const validId = await Reader.findByPk(readerId);
    const reader = await Reader.update(req.body, { where: { id: readerId } });

    if (!validId) {
      res.status(404).json({ error: "The reader could not be found." });
    }

    res.status(200).json(reader);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const destroy = async (req, res) => {
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
};

module.exports = { create, readers, readersById, update, destroy };
