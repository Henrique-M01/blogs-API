const categoriesService = require('../services/categoriesService');

async function createCategory(req, res, next) {
  try {
    const { name } = req.body;
    const create = await categoriesService.createCategory(name);

    return res.status(201).json(create);
  } catch (e) {
    next(e);
  }
}

async function getAll(_req, res, next) {
  try {
    const allCategories = await categoriesService.getAll();

    return res.status(200).json(allCategories);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createCategory,
  getAll,
};
