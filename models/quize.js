const mongoose = require('mongoose');
const User = require('./user');
const schema = mongoose.Schema;

// const quize = {
//   name: 'Test Quize',
//   type: 'qna',
//   questions: [
//     {
//       name: 'Question 1 : React is a ?',
//       type: 't',
//       timer: 1000,
//       options: [
//         { currect: true, text: 'Library', img: '' },
//         { currect: false, text: 'Framework', img: '' },
//         { currect: false, text: 'Language', img: '' },
//         { currect: false, text: 'Brand', img: '' },
//       ],
//     },
//     {
//       name: 'Question 2 : Node is a ?',
//       type: 't',
//       timer: 1000,
//       options: [
//         { currect: true, text: 'Library', img: '' },
//         { currect: false, text: 'Framework', img: '' },
//         { currect: true, text: 'Language', img: '' },
//         { currect: false, text: 'Brand', img: '' },
//       ],
//     },
//   ],
// };

// const qnaquize = new QnaQuize(quize);
// await qnaquize.save();

const quize = new schema({
  name: { type: String, require: true },
  type: { type: String, require: true },
  impressions: Number,
  admin: { type: schema.Types.ObjectId, ref: User, require: true },
  questions: [
    {
      name: { type: String, require: true },
      type: { type: String, require: true },
      timer: Number,
      options: [
        {
          currect: Boolean,
          text: String,
          url: String,
        },
      ],
    },
  ],
});

const Quize = mongoose.model('Quize', quize);
// const QnaQuize = mongoose.model('QnaQuize', qnaquize);

module.exports = Quize;
