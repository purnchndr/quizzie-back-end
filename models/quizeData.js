const mongoose = require('mongoose');
const Quize = require('./quize');
const schema = mongoose.Schema;

const quizeData = new schema({
  quize: { type: schema.Types.ObjectId, ref: Quize, require: true },
  questions: [
    {
      selected: { type: Number, require: true },
      currect: { type: Boolean, require: true },
    },
  ],
});

const QuizeData = mongoose.model('QuizeData', quizeData);
// const QnaQuize = mongoose.model('QnaQuize', qnaquize);

module.exports = QuizeData;
