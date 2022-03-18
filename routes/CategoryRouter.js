const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const authMiddlewares = require('../middlewares/auth.middlewares');
const validateName = require('../middlewares/validateName');

const categoriesRouter = express.Router();

categoriesRouter.get('/', authMiddlewares, categoriesController.getAll);

categoriesRouter.post('/', authMiddlewares, validateName, categoriesController.createCategory);

module.exports = categoriesRouter;