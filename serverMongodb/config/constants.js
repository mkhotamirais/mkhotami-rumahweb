require("dotenv").config();

const { PORT: port, TOKEN: token, MONGO_URI: uri } = process.env;

module.exports = { port, token, uri };
