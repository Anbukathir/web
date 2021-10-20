/*
   validation Name : auth
*/

/** ***************** Models Import ******************************************************** */
const Joi = require("joi");

// register is used to register the user
const register = {
  body: Joi.object().keys({
    _id: Joi.string(),
    name: Joi.string().allow(""),
    email: Joi.string().email().allow(""),
    password: Joi.string(),
  }),
};

// login the user
const login = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

// logout is used to logout the user
const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

// refreshTokens
const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

// forgotPassword is used to get the token to reset the password
const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

// reset password with new password
const resetPassword = {
  query: Joi.object().keys({
  token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required()
  }),
};

// export all the functions
module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
};
