const User = require('../models/user');
const jwt = require('../libraries/json-web-token');

const index = (req, res, next) => {
  const [bearer, token] = (req.get('Authorization') || '').split(' ');

  if(bearer !== 'Bearer') {
    const newError = new Error('Invalid Authorization');
    newError.name = 'UnauthorizedError';

    throw newError;

  }

  // TODO: check token blacklist!!! 

  jwt.
    verify(token)
    .then(({ _id }) => User.findById(_id)
      .select('-__v -_id -email -password -createdAt -updatedAt')
      .lean())
    .then(user => res.json({
      ...user,
      token,

    }))
    .catch(next);
};

const store = (req, res, next) => {
  const { email, password } = req.body;

  delete req.body.password;

  if(!email || !password) {
    const newError = new Error('Invalid email and/or password');
    newError.name = 'ValidationError';

    throw newError;
  }

  User
    .findOne({ email })
    .then(user => {
      if(!user || !user.comparePassword(password)) {

        const newError = new Error('Invalid email and/or password');
        newError.name = 'ValidationError';

        throw newError;
      }
      return Promise.all([
        user,
        jwt.sign({ _id: user._id })
      ])
        .then(([{ firstName, lastName }, token]) => {
          res.json({
            firstName,
            lastName,
            token
          });
        });
    })
    .catch(next);
};

module.exports = {
  index, 
  store,
};