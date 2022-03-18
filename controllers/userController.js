const jwtGenerator = require('../helpers/jwtGenerator');
const userService = require('../services/userService.js');

async function createUser(req, res, next) {
  try {
    const create = await userService.createUser(req.body);
    
    if (!create) {
      return res.status(409).json({ message: 'User already registered' }); 
    }

    const token = jwtGenerator({ id: create.id, name: create.displayName });

    return res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
}

async function getAll(_req, res, next) {
  try {
    const allUsers = await userService.getAll();

    return res.status(200).json(allUsers);
  } catch (e) {
    return next(e);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const userById = await userService.getById(id);

    if (!userById) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(userById);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createUser,
  getAll,
  getById,
};
