const express = require('express');
var morgan = require('morgan');
var cors = require('cors');

//! Routers import
const userRouter = require('./routes/user');
const quizeRouter = require('./routes/quize');

const { errorHandeler, wrongPath } = require('./error/error');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/user', userRouter);
app.use('/api/quize', quizeRouter);

app.get('*', wrongPath);
app.use(errorHandeler);

module.exports = app;
