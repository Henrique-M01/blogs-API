const nameSchema = require('../schemas/nameSchema');

async function validateName(req, _res, next) {
  try {
    await nameSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
}

module.exports = validateName;
