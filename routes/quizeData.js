const express = require('express');
const router = express.Router();
const {
  createQuize,
  getAllQuize,
  getQuize,
} = require('../controllers/quizeData');

router.get('/', getAllQuize).get('/:id', getQuize).post('/:id', createQuize);

module.exports = router;
