const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
//const postdataController = require('../controllers/postdata_controller')
// get the route and the function.
//router.get('/profile',userController.profile);
router.get('/',userController.post);

module.exports = router;