const postService = require('../services/postService');

async function createPost(req, res, next) {
  try {
    const { title, categoryIds, content } = req.body;

    const verifyCategory = await postService.alreadyExistCategory(categoryIds);

    if (!verifyCategory.every((category) => category.length > 0)) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const create = await postService.createPost(title, content, req.tokenData.name);
    
    return res.status(201).json(create);
  } catch (e) {
    next(e);
  }
}

async function getAll(req, res, next) {
  try {
    const allPosts = await postService.getAll();

    return res.status(200).json(allPosts);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createPost,
  getAll,
};
