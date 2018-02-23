const Todo = require('../models/todo');


const index = (req, res, next) => {
  Todo
    .find({ user: req.user._id })
    .select('-__v -user -createdAt -updateAt')
    .lean()
    .then(todos => {
      res.json({
        data: { todos },
      });
    })
    .catch(next);
};

const store = (req, res, next) => {
  Todo
    .create({ ...req.body, user: req.user._id })
    .then(todo => {
      res.json({
        data: { todo },
      });
    })
    .catch(next);
};

const show = (req, res, next) => {
  Todo
    .findOne({ 
      _id: req.params.id,
      user: req.user._id
    })
    .select('-__v -user -createdAt -updateAt')
    .lean()
    .then(todo => {
      res.json({
        data: { todo }
      });
    })
    .catch(next);
};

const update = (req, res, next) => {
  Todo
    .findOneAndUpdate({ 
      _id: req.params.id,
      user: req.user._id,
    },
    req.body,
    { new: true }
    )
    .select('-__v -user -createdAt -updateAt')
    .lean()
    .then(todo => {
      res.json({
        data: { todo }
      });
    })
    .catch(next);
};

const destroy = (req, res, next) => {
  Todo
    .findOneAndRemove({ 
      _id: req.params.id,
      user: req.user._id
    })
    .select('-__v -user -createdAt -updateAt')
    .lean()
    .then(todo => {
      res.json({
        data: { todo }
      });
    })
    .catch(next);
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
};