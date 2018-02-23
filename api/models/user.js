const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ENV = require('../constants/env');

const { Schema } = mongoose;
const { Types } = Schema;

const userSchema = new Schema({
  firstName: {
    type: Types.String,
    required: 'The first name is required',
    trim: true,
  },
  lastName: {
    type: Types.String,
    required: 'The last name is required',
    trim: true,
  },
  email: {
    type: Types.String,
    required: 'Email is required',
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: Types.String,
    required: 'Password is required',
    trim: true,
    set: password => bcrypt.hashSync(password, ENV.BCRYPT_SALT_ROUNDS),
  },
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
  updatedAt: {
    type: Types.Date,
    default: Date.now,
  },
}, {
  collection: 'user'
});

userSchema.loadClass(class{

  comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;