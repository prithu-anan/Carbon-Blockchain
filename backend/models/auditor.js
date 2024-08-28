const mongoose = require('mongoose');

const auditorSchema = new mongoose.Schema({


});

const Auditor = mongoose.model('Auditor',auditorSchema);

module.exports = Auditor ;