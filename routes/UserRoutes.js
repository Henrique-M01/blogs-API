const express = require('express');
const userController = require('../controllers/userController');
const authMiddlewares = require('../middlewares/auth.middlewares');
const validateUser = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.get('/:id', authMiddlewares, userController.getById);

userRouter.get('/', authMiddlewares, userController.getAll);

userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;