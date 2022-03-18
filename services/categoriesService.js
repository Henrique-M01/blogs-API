const { Category } = require('../models');

async function createCategory(name) {
  const [category, created] = await Category.findOrCreate({
    where: { name },
    defaults: { name },
  });

  if (!created) return false;

  return category;
}

async function getAll() {
  const allCategories = await Category.findAll();

  return allCategories;
}

module.exports = {
  createCategory,
  getAll,
};
