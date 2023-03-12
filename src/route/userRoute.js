const express = require("express");
const { getAllUsersController, removeUserByIdController, addUserController, getUserByIdController } = require("../controller/userController");
const router = express.Router();

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/", addUserController);
router.delete("/:id", removeUserByIdController);

module.exports = router;