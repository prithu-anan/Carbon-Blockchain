const Developer = require('../models/developer');

// Function to register a new developer
const registerDeveloper = async (req, res) => {
  const {
    user,
    walletId,
    investorType,
    investorName,
    address,
    coordinates,
    permitsAndLicences,
    eiaDocuments,
    tokenWalletInformation,
    healthAndSafetyPolicies,
    businessRegistrationDocuments,
    financialStatements,
    proofOfCompliance,
    ownershipInformation,
    projectRole,
    description,
    sequestration,
    scope,
    startDate,
    endDate,
    monitoring
  } = req.body;

  try {
    // Check if the developer with the given walletId already exists
    const existingDeveloper = await Developer.findOne({ walletId });
    if (existingDeveloper) {
      return res.json({ success: false, message: 'Developer with this walletId already exists.' });
    }

    // Create a new Developer entry
    const newDeveloper = new Developer({
      user,
      walletId,
      investorType,
      investorName,
      address,
      coordinates,
      permitsAndLicences,
      eiaDocuments,
      tokenWalletInformation,
      healthAndSafetyPolicies,
      businessRegistrationDocuments,
      financialStatements,
      proofOfCompliance,
      ownershipInformation,
      projectRole,
      description,
      sequestration,
      scope,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      monitoring,
      dateOfRegistration: new Date() // Automatically set the current date
    });

    // Save the developer to the database
    const savedDeveloper = await newDeveloper.save();
    res.json({success: true, message: "Developer registered successfully"});
  } catch (err) {
    console.error(err);
    res.json({ success: false,  message: 'Server error' });
  }
};

module.exports = { registerDeveloper };
