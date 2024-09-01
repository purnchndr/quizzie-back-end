const QuizeData = require('../models/quizeData');
const Quize = require('../models/quize');

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
  const id = req.params.id;
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

const getAllQuizeAnalysis = async (req, res, next) => {
  const id = req.params.id;
  try {
    let quize = await Quize.findById(id);
    if (!quize)
      return res.status(404).json({
        message: 'Quize not found',
        result: false,
      });
    let quizeData = await QuizeData.find({ quize: id });
    const analytics = {
      name: quize.name,
      createdOn: quize.createdOn,
      impressions: quize.impressions,
      type: quize.type,
    };
    if (quize.type === 'poll') {
      analytics.questions = quize.questions.map((c, i) => {
        const answers = Array.from({ length: 5 }, () => 0);
        quizeData.forEach((c, j) => {
          let selected = c.questions[i].selected;
          selected = selected === -1 ? 4 : selected;
          answers[selected] = answers[selected] + 1;
        });

        let options;
        if (c.type === 't')
          options = c.options.map((d, i) => {
            return { text: d.text, selected: answers[i] };
          });
        else if (c.type === 'i')
          options = c.options.map((d, i) => {
            return { url: d.url, selected: answers[i] };
          });
        else
          options = c.options.map((d, i) => {
            return { text: d.text, url: d.url, selected: answers[i] };
          });
        return { name: c.name, options, type: c.type };
      });
    } else if (quize.type === 'qna') {
      analytics.questions = quize.questions.map((c, i) => {
        let currect = 0;
        let incurrect = 0;
        quizeData.forEach((d, j) => {
          if (d.questions[i].currect) currect++;
          else incurrect++;
        });
        const taken = currect + incurrect;
        const name = c.name;
        return { name, currect, incurrect, taken };
        // const incurr = Array.from({ length: 5 }, () => 0);
        // quizeData.forEach((c, j) => {
        //   let currect = c.questions[i].currect;
        //   console.log(currect);
        //   if (currect) curr[j] = curr[j] + 1;
        //   else incurr[j] = incurr[j] + 1;
        // });

        // console.log(curr);
        // console.log(incurr);

        // let options;

        // if (c.type === 't')
        //   options = c.options.map((d, i) => {
        //     return {
        //       text: d.text,
        //       currect: curr[i],
        //       incurrect: incurr[i],
        //       taken: curr[i] + incurr[i],
        //     };
        //   });
        // else if (c.type === 'i')
        //   options = c.options.map((d, i) => {
        //     return {
        //       url: d.url,
        //       currect: curr[i],
        //       incurrect: incurr[i],
        //       taken: curr[i] + incurr[i],
        //     };
        //   });
        // else
        //   options = c.options.map((d, i) => {
        //     return {
        //       text: d.text,
        //       url: d.url,
        //       currect: curr[i],
        //       incurrect: incurr[i],
        //       taken: curr[i] + incurr[i],
        //     };
        //   });
        // return { name: c.name, options, type: c.type };
        // return null;
      });
    }

    res.status(200).json({
      message: 'Data fetched succesfully',
      quizeData,
      analytics,
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
  getAllQuizeAnalysis,
};
