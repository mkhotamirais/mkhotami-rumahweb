const { Sequelize } = require("sequelize");
const { dbname, dbuser, dbpass, dbhost } = require("./constants");

const conn = new Sequelize(dbname, dbuser, dbpass, {
  host: "localhost",
  dialect: "mysql",
  logging: console.log(`Connect to mysql database ${dbname}`),
});

module.exports = conn;
