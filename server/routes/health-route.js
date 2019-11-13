// import dependencies and initialize the express router
const express = require('express');
const HealthController = require('../controllers/health-controller');

const router = express.Router();

// define routes
router.get('', HealthController.getHealth);

module.exports = router;
