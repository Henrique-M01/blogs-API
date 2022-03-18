const postSchema = require('../schemas/postSchema');

async function validatePost(req, _res, next) {
  try {
    await postSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
}

module.exports = validatePost;
