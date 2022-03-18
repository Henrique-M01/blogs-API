const loginService = require('../services/loginService');

async function generateToken(req, res, next) {
  try {
    const { email, password } = req.body;
    const generateNewLogin = await loginService.userExist(email, password);

    if (!generateNewLogin) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json({ token: generateNewLogin });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  generateToken,
};
