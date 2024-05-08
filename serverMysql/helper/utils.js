const { hashSync, compareSync, genSaltSync } = require("bcrypt");

const ok = (res, status, message, data = {}) => {
  return res.status(status).json({ message, data });
};

const err = (res, status, error) => {
  return res.status(status).json({ message: error?.original?.sqlMessage || error?.message || error });
};

const hashPass = (pass) => {
  const salt = genSaltSync(10);
  return hashSync(pass, salt);
};

const comparePass = (pass, savedPass) => {
  return compareSync(pass, savedPass);
};

module.exports = { ok, err, hashPass, comparePass };
