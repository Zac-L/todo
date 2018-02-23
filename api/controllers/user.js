const User = require('../models/user');
const jwt = require('../libraries/json-web-token');

const store = (req, res, next) => {
  User.create(req.body)
    .then(user => Promise.all([
      user,
      jwt.sign({ _id: user._id }),
    ]))
    .then(([{ firstName, lastName }, token]) => {
      res.json({
        firstName,
        lastName,
        token, 
      });
    })
    .catch(next);
};

module.exports = {
  store,
};