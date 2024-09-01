const express = require('express');
const router = express.Router();
const {
  createQuize,
  getAllQuize,
  getQuize,
  getAllQuizeAnalysis,
} = require('../controllers/quizeData');

router
  .get('/:id', getQuize)
  .get('/all/:id', getAllQuize)
  .post('/:id', createQuize)
  .get('/quizeanalysis/:id', getAllQuizeAnalysis);

module.exports = router;
