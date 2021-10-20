const catchAsync = require('../utils/catchAsync');
const tokenService = require('../service/token.service');
const userService = require('../service/user.service');
const authService = require('../service/auth.service');

const register = catchAsync(async (req, res) => {
  const user = await userService.postUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(201).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

module.exports = {
  register,
  login
}