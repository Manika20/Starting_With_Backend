const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
// get the url and the function.
router.get('/profile',userController.profile);

module.exports = router;