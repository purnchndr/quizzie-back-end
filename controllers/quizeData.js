const QuizeData = require('../models/quizeData');

const createQuize = async (req, res, next) => {
  try {
    const quizeData = new QuizeData(req.body);
    await quizeData.save();
    res.status(200).json({
      message: 'QuizeData Created succesfully',
      result: true,
      id: quizeData._id,
    });
  } catch (err) {
    next(err);
  }
};

const getQuize = async (req, res, next) => {
  try {
    const id = req.params.id;
    let quizeData = await QuizeData.findOne({ _id: id }).select('-__v');

    if (!quizeData)
      return res
        .status(404)
        .json({ message: 'QuizeData not found', result: false });
    return res.status(200).json({
      message: 'QuizeData fetched succesfully',
      quizeData,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const getAllQuize = async (req, res, next) => {
  const id = req.query.id;
  try {
    if (!id)
      return res.status(404).json({
        message: 'Quize not found',
        result: false,
      });
    let quizes = await QuizeData.find({ quize: id });
    res.status(200).json({
      message: 'Data fetched succesfully',
      quizes,
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createQuize,
  getAllQuize,
  getQuize,
};