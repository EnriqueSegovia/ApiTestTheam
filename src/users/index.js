
const router = require('express').Router();
const { getAllUsers, getUserById, deleteUserById, createUser, updateUser } = require ('./user.controller');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUserById)
router.patch('/:id' , updateUser)

module.exports = router;