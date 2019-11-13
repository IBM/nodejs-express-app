// import dependencies and initialize the express router
const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('../config/swagger');

const router = express.Router();

// define routes
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDoc));

module.exports = router;
