const { DataTypes } = require("sequelize");
const conn = require("../config");

const User = conn.define(
  "User",
  {
    username: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, len: [3, 100] } },
    email: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "user", validate: { notEmpty: true } },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
