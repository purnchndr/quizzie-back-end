const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authUser = async (req, res, next) => {
  try {
    const jwtToken = req.headers['auth-token'];
    const jwtData = jwt.verify(jwtToken, process.env.JWS_SECRET);
    const user = await User.findById(jwtData._id);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authUser;
