const { getUserById, updateUser, deleteUser, getUsers, postUser } = require("../controllers/userController");

const router = require("express").Router();

router.route("/").get(getUsers).post(postUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
