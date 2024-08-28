const express = require('express') ;

const investorRouter = express.Router() ;

const investorController = require('../controller/investorController') ;


investorRouter.route('/')
.post(investorController.registerInvestor) ;

module.exports = investorRouter ;