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
  notFound
};