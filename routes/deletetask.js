const express = require('express');
const router = express.Router();
const deletetaskController = require('../controllers/deletetask_controller');
router.get('/',deletetaskController.delete);
module.exports = router;