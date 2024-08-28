const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  walletId: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  coordinates: {
    type: String,
    required: true
  },
  permitsAndLicences: {
    type: String,
    // required: true
  },
  eiaDocuments: {
    type: String,
    // required: true
  },
  tokenWalletInformation: {
    type: String,
    // required: true
  },
  healthAndSafetyPolicies: {
    type: String,
    // required: true
  },
  businessRegistrationDocuments: {
    type: String,
    // required: true
  },
  financialStatements: {
    type: String,
    // required: true
  },
  proofOfCompliance: {
    type: String,
    // required: true
  },
  ownershipInformation: {
    type: String,
    // required: true
  },
  projectRole: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sequestration: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  monitoring: {
    type: String,
    required: true
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now, // Storing the date of registration automatically
    required: true
  }
});

const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;
