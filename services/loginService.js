const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

async function userExist(email, loginPassword) {
  const alreadyExist = await User.findAll({ where: { email } });

  if (alreadyExist.length === 0) return false;

  const { displayName, password } = alreadyExist[0].dataValues;

  if (password !== loginPassword) return false;

  const token = jwtGenerator({ name: displayName, email });

  return token;
}

module.exports = {
  userExist,
};
