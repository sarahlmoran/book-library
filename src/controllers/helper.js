const { Reader, Book } = require("../models");
const { options } = require("../routes/reader");

const get404Error = (model) => ({ error: `The ${model} could not be found.` });

const getModel = (model) => {
  const models = {
    reader: Reader,
    book: Book,
  };

  return models[model];
};

const removePassword = (obj) => {
  if (obj.hasOwnProperty("password")) {
    delete obj.password;
  }

  return obj;
};

const getAllItems = async (res, model) => {
  const Model = getModel(model);

  const items = await Model.findAll({ ...options });

  const itemsWithoutPassword = items.map((item) => {
    return removePassword(item.dataValues);
  });

  res.status(200).json(itemsWithoutPassword);
};

const createItem = async (res, model, item) => {
  const Model = getModel(model);

  try {
    const newItem = await Model.create(item);
    const itemWithoutPassword = removePassword(newItem.dataValues);

    res.status(201).json(itemWithoutPassword);
  } catch (error) {
    const errorMessages = error.errors?.map((e) => e.message);

    res.status(400).json({ errors: errorMessages });
  }
};

const getItemById = async (res, model, id) => {
  const Model = getModel(model);

  const item = await Model.findByPk(id, { ...options });

  if (!item) {
    res.status(404).json(get404Error(model));
  } else {
    const itemWithoutPassword = removePassword(item.dataValues);
    res.status(200).json(item);
  }
};

const updateItem = async (res, model, item, id) => {
  const Model = getModel(model);

  const [itemsUpdated] = await Model.update(item, { where: { id } });

  if (!itemsUpdated) {
    res.status(404).json(get404Error(model));
  } else {
    const updatedItem = await Model.findByPk(id);
    const itemWithoutPassword = removePassword(updatedItem.dataValues);
    res.status(200).json(itemWithoutPassword);
  }
};

const deleteItem = async (res, model, id) => {
  const Model = getModel(model);

  const item = await Model.destroy({ where: { id } });

  if (!item) {
    res.status(404).json(get404Error(model));
  } else {
    res.status(204).send();
  }
};

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};
