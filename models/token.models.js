
const mongoose = require('mongoose');

const { tokenTypes } = require('../config/token');

const { toJSON } = require('./plugins/index')

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: String,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
tokenSchema.plugin(toJSON);


/**
 * @typedef Token
 */
const Token = mongoose.model('tokens', tokenSchema);

module.exports = Token;
