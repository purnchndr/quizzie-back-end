const express = require('express');
var morgan = require('morgan');
var cors = require('cors');

const userRouter = require('./routes/user');
const quizeRouter = require('./routes/quize');
const quizeDataRouter = require('./routes/quizeData');

const { errorHandeler, wrongPath } = require('./error/error');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/user', userRouter);
app.use('/api/quize', quizeRouter);
app.use('/api/quizedata', quizeDataRouter);

app.get('*', wrongPath);
app.use(errorHandeler);

module.exports = app;
