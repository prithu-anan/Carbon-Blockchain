// Example Usage : 

// import MetaMask from './metamask.js';
// const metamask = new MetaMask();
// use await for the async functions
// see Login.jsx for details

import {ethers} from 'ethers' ;

class Metamask {

  async connectWallet() {   // connects to the wallet and returns the wallet Id
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Metamask says, Connected", accounts[0]);

      return accounts[0] ;

    } catch (error) {
      console.error("User denied account access", error);
    }
  }

  async signMessage(message){   //given a message to sign, prompts the user to sign with his private key and returns the signature

    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const signature = await signer.signMessage(message) ;
  
        console.log('Metamask says ,Signature:', signature);
        
        return signature ;
        
      } catch (error) {
        console.error('Login failed', error);
      }
    }

  }

export default Metamask;
