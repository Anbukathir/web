const { version } = require('../package.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Paradigm',
    description: '10/06/2021',
    version,
  },
  servers: [
    {
      url: ' http://192.168.0.193:8080',

    },
    {
      url: ' http://localhost:8080',

    },
  ],
};

module.exports = swaggerDef;
