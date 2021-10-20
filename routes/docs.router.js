const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../docs/swaggerDef');

const router = express.Router();

const swagger = swaggerJsdoc({
    swaggerDefinition,
    apis:['docs/*.yml', 'routes/*.router.js']
});

router.use('/', swaggerUi.serve);

router.get( '/',
    swaggerUi.setup(swagger, {
      explorer: true,
      
    }),
  );
  module.exports = router;