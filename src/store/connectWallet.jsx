import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAccount } from '.';
import Metamask from '../metamask';

const metamask = new Metamask();

export const connectWallet = createAsyncThunk(
  'account/connectWallet',
  async (_, thunkAPI) => {
    try {
      const account = await metamask.connectWallet();
      if (account !== null) {
        thunkAPI.dispatch(setAccount(account)); // Update the state with the first account
      } else {
        console.error("No accounts found");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  }
);
