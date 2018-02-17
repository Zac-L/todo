const notFound = (req, res) => {
  res.status(404)
    .json({
      data: {
        title: 'Not Found'
      }
    });
};

module.exports = {
  notFound
};