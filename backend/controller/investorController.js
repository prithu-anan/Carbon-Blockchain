const Investor = require('../models/investor');

// Function to register a new investor
const registerInvestor = async (req, res) => {
  try {
    // Destructure necessary information from frontend JSON
    const {
      user,
      walletId,
      investorType,
      investorName,
      address,
      coordinates,
      projectRole
    } = req.body;

    // Check if the investor with the given walletId already exists
    const existingInvestor = await Investor.findOne({ walletId });
    if (existingInvestor) {
      return res.json({ success: false ,message: 'Investor with this walletId already exists.' });
    }

    // Create a new Investor entry
    const newInvestor = new Investor({
      user,
      walletId,
      investorType,
      investorName,
      address,
      coordinates,
      projectRole,
      dateofRegistration: new Date() // Automatically set the current date
    });

    // Save the investor to the database
    const savedInvestor = await newInvestor.save();
    res.json({success:true, message:"Investor Registered Successfully"});
  } catch (err) {
    console.error(err);
    res.json({ success:false, message: 'Server error' });
  }
};

module.exports = { registerInvestor };
