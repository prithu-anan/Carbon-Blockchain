const mongoose = require('mongoose');

const auditorSchema = new mongoose.Schema({

    user: {
        type : String 
    } ,

    walletId : {
        type: String ,
        required : true ,
        unique : true 
    } ,

    role : {
        type: String
    } ,

    firstName : {
        type : String 
    },

    lastName : {
        type : String 
    } , 

    email : {
        type : String,
        unique : true
    },

    phoneNumber : {
        type: String
    }

});

const Auditor = mongoose.model('Auditor',auditorSchema);

module.exports = Auditor ;