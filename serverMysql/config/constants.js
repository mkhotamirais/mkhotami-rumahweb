require("dotenv").config();

const { PORT: port, DB_NAME: dbname, DB_USER: dbuser, DB_PASS: dbpass, DB_HOST: dbhost } = process.env;

module.exports = { port, dbname, dbuser, dbpass, dbhost };
