const express = require('express');
const router = express.Router();
const authUser = require('./auth');
const {
  createQuize,
  updateQuize,
  deleteQuize,
  getAllQuize,
  getQuize,
} = require('../controllers/quize');

router
  .get('/', authUser, getAllQuize)
  .post('/', authUser, createQuize)
  .get('/:id', authUser, getQuize)
  .patch('/:id', authUser, updateQuize)
  .delete('/:id', authUser, deleteQuize);

module.exports = router;
