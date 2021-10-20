const pick = require('../utils/pick');
const joi = require('joi');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['query', 'params', 'body'])
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(', ');
    res.status(400).send(errorMessage);
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
