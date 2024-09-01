const Quize = require('../models/quize');

const createQuize = async (req, res, next) => {
  try {
    const data = req.body;
    data.admin = req.user;
    const quize = new Quize(data);
    await quize.save();
    res.status(200).json({
      message: 'Quize Created succesfully',
      result: true,
      id: quize._id,
    });
  } catch (err) {
    next(err);
  }
};

const updateQuize = async (req, res, next) => {
  const id = req.params.id;
  try {
    const quize = await Quize.findByIdAndUpdate(id, req.body);
    if (!quize)
      return res
        .status(404)
        .json({ message: 'Quize not found', result: false });
    return res
      .status(200)
      .json({ message: 'Quize updated', quize, result: true });
  } catch (err) {
    next(err);
  }
};

const deleteQuize = async (req, res, next) => {
  try {
    const id = req.params.id;
    let quize = await Quize.findByIdAndDelete(id);
    if (!quize)
      return res
        .status(404)
        .json({ message: 'Invalid Request', result: false });
    return res.status(200).json({
      message: 'Quize deleted succesfully',
      quize,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const getQuize = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = req.user;
    let quize = await Quize.findOne({ _id: id });
    if (!quize)
      return res
        .status(404)
        .json({ message: 'Quize not found', result: false });
    return res.status(200).json({
      message: 'Quize fetched succesfully',
      quize,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const takeQuize = async (req, res, next) => {
  try {
    const id = req.params.id;
    let quize = await Quize.findOneAndUpdate(
      { _id: id },
      { $inc: { impressions: 1 } },
      { new: true }
    );
    if (!quize)
      return res
        .status(404)
        .json({ message: 'Quize not found', result: false });
    return res.status(200).json({
      message: 'Quize fetched succesfully',
      quize,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const getAllQuize = async (req, res, next) => {
  try {
    let quizes = await Quize.find({ admin: req.user });
    res.status(200).json({
      message: 'Data fetched succesfully',
      quizes,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const getDashboard = async (req, res, next) => {
  try {
    const user = req.user;
    let quize = await Quize.find({ admin: user });
    if (!quize)
      return res
        .status(404)
        .json({ message: 'Quize not found', result: false });
    console.log(quize);
    const impressions = quize.reduce(
      (sum, curr) => sum + (curr?.impressions || 0),
      0
    );
    const questions = quize.reduce(
      (sum, curr) => sum + (curr?.questions?.length || 0),
      0
    );
    const quizes = quize.length || 0;
    const tranding = [...quize]
      .sort((a, b) => b.impressions - a.impressions)
      .filter(c => c.impressions >= 5);

    return res.status(200).json({
      message: 'Quize fetched succesfully',
      analytics: { impressions, questions, quizes, tranding },
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createQuize,
  updateQuize,
  deleteQuize,
  getAllQuize,
  getQuize,
  getDashboard,
  takeQuize,
};
