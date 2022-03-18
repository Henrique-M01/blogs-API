const { User } = require('../models');

async function createUser({ displayName, email, password, image }) {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      displayName, email, password, image,
    },
  });

  if (!created) return false;

  return user;
}

async function getAll() {
  const allUsers = await User.findAll();

  return allUsers;
}

async function getById(id) {
  const userById = await User.findByPk(id);
  if (userById === null) return false;

  return userById;
}

module.exports = {
  createUser,
  getAll,
  getById,
};
