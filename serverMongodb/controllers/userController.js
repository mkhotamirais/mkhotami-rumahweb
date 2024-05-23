const { err, ok } = require("../helper/utils");

const getUsers = async (req, res) => {
  try {
    ok(res, 200, `getUsers`);
  } catch (error) {
    err(res, 400, error);
  }
};

const getUserById = async (req, res) => {
  try {
    ok(res, 200, `getUsers`);
  } catch (error) {
    err(res, 400, error);
  }
};

const postUser = async (req, res) => {
  try {
    ok(res, 200, `getUsers`);
  } catch (error) {
    err(res, 400, error);
  }
};

const updateUser = async (req, res) => {
  try {
    ok(res, 200, `getUsers`);
  } catch (error) {
    err(res, 400, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    ok(res, 200, `getUsers`);
  } catch (error) {
    err(res, 400, error);
  }
};
