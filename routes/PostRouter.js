const express = require('express');
const postController = require('../controllers/postController');
const authMiddlewares = require('../middlewares/auth.middlewares');
const validatePost = require('../middlewares/validatePost');

const postRouter = express.Router();

postRouter.post('/', authMiddlewares, validatePost, postController.createPost);

postRouter.get('/', authMiddlewares, postController.getAll);

module.exports = postRouter;