const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const User = mongoose.model('User', user);

module.exports = User;
