const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = Schema;

const todoSchema = new Schema({
  title: {
    type: Types.String,
    required: [true, 'The title is required.'],
    trim: true
  },
  completed: {
    type: Types.Boolean,
    default: false,
  },
  // user: {
  //   type: Types.ObjectId,
  //   required: 'The userid is required',
  //   ref: 'User',
  // },
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
  updatedAt: {
    type: Types.Date,
    default: Date.now,
  },
}, {
  collection: 'todos',
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports =  Todo;