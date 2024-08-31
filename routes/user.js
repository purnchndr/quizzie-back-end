const express = require('express');
const router = express.Router();
const authUser = require('./auth');

const {
  registerUser,
  loginUser,
  getUser,
  deleteUser,
  updateUser,
} = require('../controllers/user');

router
  .post('/register', registerUser)
  .post('/login', loginUser)
  .get('/:id', authUser, getUser)
  .patch('/:id', authUser, updateUser)
  .delete('/:id', authUser, deleteUser);

module.exports = router;
