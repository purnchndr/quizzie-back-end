const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user)
      return res.status(404).json({
        message: 'User already registered, please login',
        result: false,
      });
    const hash = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hash });
    await user.save();
    var token = jwt.sign({ _id: user._id }, process.env.JWS_SECRET);
    res
      .header('auth-token', token)
      .status(200)
      .json({ message: 'User Created succesfully', result: true, token });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ message: 'Email or Password is incorrect', result: false });
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (isCorrectPassword) {
      const token = jwt.sign({ _id: user._id }, process.env.JWS_SECRET);
      return res
        .header('auth-token', token)
        .status(201)
        .json({ message: 'Login successful', result: true, token });
    } else
      return res
        .status(404)
        .json({ message: 'Email or Password is incorrect', result: false });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    let user = await User.findById(id).select('-password -__v');
    if (!user)
      return res.status(404).json({ message: 'User not found', result: false });
    return res.status(200).json({
      message: 'User fetched succesfully',
      data: user,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    let user = await User.findByIdAndDelete(id).select('-password -__v');
    if (!user)
      return res.status(404).json({ message: 'User not found', result: false });
    return res.status(200).json({
      message: 'User deleted succesfully',
      data: user,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;
    if (body.email)
      return res
        .status(400)
        .json({ message: "Email can't be changed", result: false });

    if (body.password) body.password = await bcrypt.hash(body.password, 10);
    let user = await User.findByIdAndUpdate(id, body);
    if (!user)
      return res.status(400).json({ message: 'user not found', result: false });

    res.status(200).json({ message: 'User updated succesfully', result: true });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  deleteUser,
  updateUser,
};
