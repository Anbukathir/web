const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config');
const { Token } = require('../models');
const { tokenTypes } = require('../config/token')


const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    'minutes',
  );
  const accessToken = await generateToken(
    user._id,
    accessTokenExpires,
    tokenTypes.ACCESS,
  );
  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
  };
};
module.exports = {
  generateAuthTokens
}

