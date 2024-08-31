function errorHandeler(err, req, res, next) {
  let error = `[${new Date().toTimeString()}] || ${req.method} || ${
    req.ip
  } \n \t ${JSON.stringify(err)}`;
  console.log(error);
  res.status(500).json({
    message: err.message,
    error: err,
    result: false,
  });
}

function wrongPath(req, res) {
  res.status(500).json({
    message: 'Invalid Path or Prameters',
    result: false,
    path: req.path,
  });
}

module.exports = { errorHandeler, wrongPath };
