const express = require('express');
const router = express.Router();
const authUser = require('./auth');
const {
  createQuize,
  updateQuize,
  deleteQuize,
  getAllQuize,
  getQuize,
  getDashboard,
  takeQuize,
} = require('../controllers/quize');

router
  .get('/', authUser, getAllQuize)
  .post('/', authUser, createQuize)
  .get('/dashboard', authUser, getDashboard)
  .get('/takequize/:id', takeQuize)
  .get('/:id', authUser, getQuize)
  .patch('/:id', authUser, updateQuize)
  .delete('/:id', authUser, deleteQuize);

module.exports = router;
