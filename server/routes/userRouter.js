
const express = require('express')

const router = express.Router()

const {
    registerUser,
    loginUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
  } = require("../controllers/userController");
  
  
  router.post("/register", registerUser);
  router.post("/login", loginUser);
  router.get("/users", getUsers);
  router.get("/users/:id", getUserById);
  router.put("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser)
module.exports = router  