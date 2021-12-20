const validator = require("../utils/addUserValidator");



const validate = async (req, res, next) => {
  console.log("Parameters Validated");

  let { error } = await validator.validate(req.body);
  if (error) res.status(400).send(error);
  else next();
};

module.exports = { validate};








