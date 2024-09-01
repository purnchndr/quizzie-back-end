const mongoose = require('mongoose');
const Quize = require('./quize');
const schema = mongoose.Schema;

const quizeData = new schema({
  quize: { type: schema.Types.ObjectId, ref: Quize, require: true },
  submittedOn: { type: Date, default: Date.now() },
  type: { type: String, require: true },
  name: { type: String, require: true },
  questions: [
    {
      name: { type: String, require: true },
      selected: { type: Number, require: true },
      currect: { type: Boolean, require: true },
    },
  ],
});

const QuizeData = mongoose.model('QuizeData', quizeData);

module.exports = QuizeData;
