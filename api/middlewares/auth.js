const jwt = require('../libraries/json-web-token');

const ensureAuth = (req, res, next) => {
  const [bearer, token] = (req.get('Authorization') || '')
    .split(' ');

  if(bearer !== 'Bearer') {
    // throw an error
    const newError = new Error('Invalid Authorization');
    newError.name = 'UnauthorizedError';

    throw newError;

  }

  jwt.verify(token)
    .then(({ _id }) => {
      req.user = { _id };

      next();
    });

};


module.exports = {
  ensureAuth,
};