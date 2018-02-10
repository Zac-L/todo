const http = require('http');
const app = require('./app');
const ENV = require('../constants/env');


const server = http.createServer(app);

let address;

server.on('listening', () => {
  address = server.address();

  console.log(`Server running at :${address.port}`);
});

server.on('close', () => {
  console.log(`Server stopped at :${address.port}`);
});

const start = (port = ENV.PORT, host = ENV.HOST) => {
  new Promise((resolve, reject) => {
    server.listen(port, host, (error) => {
      error 
        ? reject(error)
        : resolve({
          host,
          port
        });
    });
  });
};

const stop = () => {
  new Promise((resolve, reject) => {
    server.listen((error) => {
      error 
        ? reject(error)
        : resolve();
    });
  });
};

module.exports = {
  start,
  stop,
};