const index = (req, res) => {
  res.json({
    data: {
      title: 'Todo API',
    }
  });
};

module.exports = {
  index,
};