import { useState } from 'react';
import { ethers } from 'ethers';
import Metamask from '../metamask' ;

function verifySignature(message, signature, account) {
    try {
      // Recover the address from the signature
      const recoveredAddress = ethers.verifyMessage(message, signature);
  
      // Check if the recovered address matches the account
      return recoveredAddress.toLowerCase() === account.toLowerCase();
    } catch (error) {
      console.error('Signature verification failed', error);
      return false;
    }
  }

export default function Login() {
  const [account, setAccount] = useState(null);
  const [signature, setSignature] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const metamask = new Metamask();

  // Connect MetaMask wallet
  async function connectWallet() {
    setAccount(await metamask.connectWallet());
  }

  // Sign a message to log in
  async function login() {
    try {
      const message = `Login request for ${account}`;
      
      const signature = await metamask.signMessage(message);

      setSignature(signature);
      setLoggedIn(true);

      // Now you can send the signature and account to the backend for verification
      console.log('Signature:', signature);
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  return (
    <div>
      {!account && <button onClick={connectWallet}>Connect Wallet</button>}
      
      {account && !loggedIn && (
        <div>
          <p>Connected: {account}</p>
          <button onClick={login}>Login</button>
        </div>
      )}

      {loggedIn && (
        <div>
          <p>Verifying login for : {account}</p>
          <p>Signature: {signature}</p>
        </div>
      )}
    </div>
  );
}