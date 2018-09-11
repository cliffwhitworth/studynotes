const keys = require('../config/keys');

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  if(req.user._id.toString() !== keys.mongoUserID.toString()) {
    return res.status(401).send({ error: 'Proper credentials are needed!' });
  }

  next();
};
