const { err, ok, hashPass } = require("../helper/utils");
const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const data = await User.findAll({ attributes: { exclude: ["password"] } });
    ok(res, 200, `getUsers`, data);
  } catch (error) {
    err(res, 400, error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findOne({ where: { id }, attributes: { exclude: ["password"] } });
    ok(res, 200, `getUserById`, data);
  } catch (error) {
    err(res, 400, error);
  }
};

const postUser = async (req, res) => {
  try {
    const { username, email, password, confPassword } = req.body;
    const dupUsername = await User.findOne({ where: { username } });
    if (dupUsername) return err(res, 409, `username sudah terdaftar`);
    const dupEmail = await User.findOne({ where: { email } });
    if (dupEmail) return err(res, 409, `email sudah terdaftar`);
    if (password !== confPassword) return err(res, 400, `konfirmasi password salah`);
    req.body.password = hashPass(password);
    await User.create(req.body);
    ok(res, 200, `post ${username} success`);
  } catch (error) {
    err(res, 400, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const match = await User.findOne({ where: { id } });
    if (!match) return err(res, 400, `user dengan id ${id} tidak ditemukan`);
    const { password, confPassword } = req.body;
    if (password) {
      if (password !== confPassword) return err(res, 400, `konfirmasi password salah`);
      req.body.password = hashPass(password);
    }
    await User.update(req.body, { where: { id } });
    ok(res, 200, `update ${match.username} success`);
  } catch (error) {
    err(res, 400, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const match = await User.findOne({ where: { id } });
    if (!match) return err(res, 400, `user dengan id ${id} tidak ditemukan`);
    await User.destroy({ where: { id } });
    ok(res, 200, `delete ${match.usename} success`);
  } catch (error) {
    err(res, 400, error);
  }
};

module.exports = { getUsers, getUserById, postUser, updateUser, deleteUser };
