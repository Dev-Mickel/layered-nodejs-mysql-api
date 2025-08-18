const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Layered Node.js MySQL API',
      version: '1.0.0',
      description: 'API documentation using Swagger - includes Users, Practices, and Objectives entities',
    },
    tags: [
      {
        name: 'Users',
        description: 'Operations about users'
      },
      {
        name: 'Practices',
        description: 'Operations about practices'
      },
      {
        name: 'Objectives',
        description: 'Operations about objectives'
      }
    ]
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };