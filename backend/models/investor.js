const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  walletId: {
    type: String,
    required: true,
    unique: true  // Ensures walletId is unique
  },
  investorType: {
    type: String,
    required: true
  },
  investorName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  coordinates: {
    type: String,
    required: true
  },
  projectRole: {
    type: String,
    required: true
  },
  dateofRegistration: {
    type: Date,
    required: true,
    default: Date.now // Automatically sets creation time
  }
});

const Investor = mongoose.model('Investor', investorSchema);

module.exports = Investor;
