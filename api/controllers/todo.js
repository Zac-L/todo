const Todo = require('../models/todo');


const index = (req, res, next) => {
  Todo
    .find()
    .select('-__v -createdAt -updateAt')
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
    .create(req.body)
    .then(todo => {
      res.json({
        data: { todo },
      });
    })
    .catch(next);
};

const show = (req, res, next) => {
  Todo
    .findOne({ _id: req.params.id })
    .select('-__v -createdAt -updateAt')
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
    .findOneAndUpdate({ _id: req.params.id }, 
      req.body,
      { new: true }
    )
    .select('-__v -createdAt -updateAt')
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
    .findOneAndRemove({ _id: req.params.id })
    .select('-__v -createdAt -updateAt')
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