const notFound = (req, res) => {
  res.status(404)
    .json({
      title: 'Not Found'
    });
};

module.exports = notFound;