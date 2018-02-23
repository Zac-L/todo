const index = (err, req, res, next) => {
  const error = { description: err.message };
  
  switch(err.name) {
    case'UnauthorizedError': 
      error.status = 401;
      break;
    case'ValidationError':
      error.status = 422;
      
      if(err.errors) {
        error.description = 'Validation Error with one or more fields';
        error.fields =  Object
          .entries(err.errors)
          .reduce((prev, [field, { message }]) => ({
            ...prev,
            [field]: message,
          }), {});
      }
      break;

    default: 
      error.status = 500;
      break;
  }

  return res
    .status(error.status)
    .json({ error });
};

const notFound = (req, res) => {
  res.status(404)
    .json({
      error: {
        stats: 404,
        description: `Cannot ${req.method} ${req.path}`
      }
    });
};

module.exports = {
  index,
  notFound
};