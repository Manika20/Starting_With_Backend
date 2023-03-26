const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

// get the route and the function.
router.get('/profile',userController.profile);
router.get('/',userController.profile);

module.exports = router;