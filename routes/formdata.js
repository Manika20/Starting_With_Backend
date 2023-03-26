const express = require('express');
const router = express.Router();
const formDataConroller = require('../controllers/formdata_controller');
router.post('/',formDataConroller.data);
module.exports = router;