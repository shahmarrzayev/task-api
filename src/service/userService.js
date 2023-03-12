const UserEntity = require("../entity/userEntity");

const addUser = (body) => {
  const { id, name, surname, age } = body;
  if (!id || !name || !surname || !age) return 'Invalid arguments';

  const isAvailable = users.find(u => u.id == id);
  if (isAvailable) return "User is available";

  const user = new UserEntity(id, name, surname, age);
  users.push(user);
  return user;
}

const getAllUsers = () => {
  return users;
}

const getUserById = (id) => {
  const user = users.find(u => u.id == id);
  if (!user) return 'Not found user';
  return user;
}

const removeUserById = (id) => {
  const user = users.find(u => u.id == id);
  if (!user) return 'User is not found';

  users = users.filter(u => u.id != id);
  return 'user successfully deleted';
}

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  removeUserById
}