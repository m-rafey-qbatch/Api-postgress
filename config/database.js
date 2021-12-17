const Sequelize = require("sequelize");
module.exports = new Sequelize("test", "imac", "", {
  host: "localhost",
  dialect: "postgres",
  operatorsaliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
});

