const Joi = require("joi");

const schema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required(),

  userId: Joi.number().integer(),

  firstName: Joi.string(),
  lastName: Joi.string(),

  DOB: Joi.string(),
});

module.exports = schema;
