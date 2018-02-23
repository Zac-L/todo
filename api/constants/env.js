const {
  BCRYPT_SALT_ROUNDS = 8,
  HOST = '0.0.0.0',
  JWT_SECRET = 'secret',
  NODE_ENV: NODE = 'development',
  PORT = 8000,
  PORT_TEST = 8888,
  MONGODB_URI = 'mongodb://localhost:27017/todo',
  MONGODB_URI_TEST = 'mongodb://localhost:27017/todo-test'
} = process.env;

module.exports = {
  BCRYPT_SALT_ROUNDS,
  HOST,
  JWT_SECRET,
  NODE,
  PORT,
  PORT_TEST,
  MONGODB_URI,
  MONGODB_URI_TEST
};