const express = require('express') ;

const authRouter = express.Router();

const authController = require('../controller/authController');


authRouter.route('/login')
.post(authController.login) ;

module.exports = authRouter ;