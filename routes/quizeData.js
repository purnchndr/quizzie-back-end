const express = require('express');
const router = express.Router();
const { submitQuize, getQuize, getAllQuize } = require('../controllers/quize');

router
  .get('/', getAllQuize)
  .get('/:id', getQuize)
  .post('/id', submitQuize)
  .patch('/:id', updateQuize)
  .delete('/:id', deleteQuize);

module.exports = router;
