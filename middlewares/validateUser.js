const userSchema = require('../schemas/userSchema');

async function validateUser(req, _res, next) {
  try {
    await userSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
}

module.exports = validateUser;
