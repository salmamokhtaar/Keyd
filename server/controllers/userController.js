const userModel = require('../model/userModel')
// register model

const registerUser = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    const saveUser = await newUser.save();

    if (saveUser) {
      res.status(201).send({ message: "User successfully saved", user: saveUser });
    } else {
      res.status(400).send({ message: "Failed to save user" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error: error.message });
  }
};

// get

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error: error.message });
  }
};
// by id
const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error: error.message });
  }
};
// put 
const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (updatedUser) {
      res.status(200).send({ message: "User successfully updated", user: updatedUser });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error: error.message });
  }
};
// del

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.status(200).send({ message: "User successfully deleted" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error: error.message });
  }
};
// finding existing user in the database
const loginUser = async (req, res) => {
  try {
    const userData = await userModel.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (userData) {
      res.status(200).send({ message: "Successfully logged in", user: userData });
    } else {
      res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error: error.message });
  }
};

module.exports = {registerUser, loginUser,getUsers,getUserById,updateUser,deleteUser}