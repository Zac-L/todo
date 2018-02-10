const mongoose = require('mongoose');
const ENV = require('../constants/env');

mongoose.Promise = Promise;

mongoose.set('debug', ENV.NODE !== 'production');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

mongoose.connection.on('error', error => {
  console.log(`MongoDB connection error: ${error}`);
});

const connect = (uri = ENV.MONGODB_URI) => mongoose.connect(uri);

const disconnect = () => mongoose.disconnect();

module.exports = {
  connect,
  disconnect,
};