const express = require('express') ;

const developerRouter = express.Router();

const developerController = require('../controller/developerController');

developerRouter.route('/')
.post(developerController.registerDeveloper) ;


module.exports = developerRouter ;