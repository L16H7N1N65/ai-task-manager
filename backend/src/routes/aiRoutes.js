const express = require('express');
const { generateTaskDescription } = require('../controllers/aiController');
const router = express.Router();

router.post('/generate-task', generateTaskDescription);

module.exports = router;