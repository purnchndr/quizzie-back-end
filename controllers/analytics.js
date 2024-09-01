const Quize = require('../models/quize');

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
      .slice(0, 12);

    return res.status(200).json({
      message: 'Quize fetched succesfully',
      analytics: { impressions, questions, quizes, tranding },
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

const getAllQuizes = async (req, res, next) => {
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
      .slice(0, 12);

    return res.status(200).json({
      message: 'Quize fetched succesfully',
      analytics: { impressions, questions, quizes, tranding },
      result: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getDashboard };
