const express = require('express');
const router = express.Router();
const donetaskController = require('../controllers/donetask_controller');
router.get('/',donetaskController.done);
module.exports = router;