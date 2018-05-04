const UserModel = require('./user.model');
const crypto = require("crypto");
const auth = require('../auth')
const app = require('express')();


const _UPDATE_DEFAULT_CONFIG = {
    new: true,
    runValidators: true
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    deleteUserById: deleteUserById,
    createUser: createUser,
    updateUser: updateUser
}

function getAllUsers(req, res) {
    UserModel.find()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))

}

function getUserById(req, res) {
    UserModel.findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function deleteUserById(req, res) {
    UserModel.findById(req.params.id)
        .remove()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function createUser(req, res) {
  let passwordHashed = crypto
    .createHash("sha256")
    .update(req.body.password)
    .digest("hex");
  req.body.password = passwordHashed;
  console.log(passwordHashed);
  req.body.createdAt = new Date();
  req.body.admin = false;
  UserModel.create(req.body)
      .then(response => res.json(response))
      .catch((err) => handdleError(err, res))
}

function updateUser(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body, _UPDATE_DEFAULT_CONFIG)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function handdleError(err, res){
    return res.status(400).json(err);
}