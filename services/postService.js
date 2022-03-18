const { BlogPost, Category, User } = require('../models');

async function createPost(title, content, userName) {
  const user = await User.findOne({ where: { displayName: userName } });
  const userId = user.dataValues.id;
  const create = await BlogPost.create({
    title, content, userId, published: new Date(), updated: new Date() });
  const { id } = create.dataValues;
  return { id, userId, title, content };
}

function alreadyExistCategory(categoryIds) {
  const response = categoryIds.map(async (id) => Category.findAll({ where: { id } }));

  return Promise.all(response);
}

async function getAll() {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return allPosts;
}

module.exports = {
  createPost,
  alreadyExistCategory,
  getAll,
};
