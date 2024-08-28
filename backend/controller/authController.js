const Developer = require('../models/developer') ;
const Investor = require('../models/investor') ;
const Auditor = require('../models/auditor');
const ethers = require('ethers');

async function login(req,res){

    try {
        const { role, walletId, message, hash } = req.body;
    
        let user = null;
    
        // Lookup the user based on role
        if (role === 'investor') {
          user = await Investor.findOne({ walletId });
        } else if (role === 'developer') {
          user = await Developer.findOne({ walletId });
        } else if (role === 'auditor') {
          user = await Auditor.findOne({ walletId });
        } else {
          return res.status(400).json({ success: false, message: 'Invalid role provided.' });
        }
    
        // Check if user exists
        if (!user) {
          return res.status(404).json({ success: false, message: `${role} not registered.` });
        }
    
        // Verify the message and hash to recover the public key (address)
        const recoveredAddress = ethers.utils.verifyMessage(message, hash);
    
        // Check if the recovered public key matches the provided walletId
        if (recoveredAddress.toLowerCase() === walletId.toLowerCase()) {
          return res.status(200).json({ success: true, message: 'Login successful.', user });
        } else {
          return res.status(401).json({ success: false, message: 'Verification failed.' });
        }
      } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ success: false, message: 'Server error.' });
      }


}


module.exports = {login} ;