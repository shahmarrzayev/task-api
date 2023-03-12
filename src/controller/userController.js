const { addUser, getUserById, getAllUsers, removeUserById } = require("../service/userService")

const addUserController = (req, res) => {
  const user = addUser(req.body);
  res.send(user);
}

const getAllUsersController = (req, res) => {
  const users = getAllUsers();
  res.send(users);
}

const getUserByIdController = (req, res) => {
  const user = getUserById(req.params.id);
  res.send(user)
}

const removeUserByIdController = (req, res) => {
  const resultMessage = removeUserById(req.params.id);
  res.send(resultMessage)
}

module.exports = {
  getAllUsersController,
  getUserByIdController,
  addUserController,
  removeUserByIdController
}