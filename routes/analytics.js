const express = require('express');
const router = express.Router();
const authUser = require('./auth');
const { getDashboard } = require('../controllers/analytics');

router.get('/', authUser, getDashboard);

module.exports = router;
