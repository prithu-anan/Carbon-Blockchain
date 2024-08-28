import { configureStore, createSlice } from "@reduxjs/toolkit";
import Metamask from "../metamask";

const metamask = new Metamask();

const accountSlice = createSlice({
  name: "account",
  initialState: { account: null },
  reducers: {
    setAccount(state, action) {
      state.account = action.payload;;
    },
  },
});

const auditorSlice = createSlice({
  name: "auditor",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("auditorId");
      state.isLoggedIn = false;
    },
  },
});

const investorSlice = createSlice({
  name: "investor",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("investorId");
      state.isLoggedIn = false;
    },
  },
});

const projectDeveloperSlice = createSlice({
  name: "projectDeveloper",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("projectDeveloperId");
      state.isLoggedIn = false;
    },
  },
});

const communityMemberSlice = createSlice({
    name: "communityMember",
    initialState: { isLoggedIn: false },
    reducers: {
      login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        localStorage.removeItem("communityMemberId");
        state.isLoggedIn = false;
      },
    },
});

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isCollapsed: false },
  reducers: {
    collapse(state) {
      state.isCollapsed = true;
    },
    expand(state) {
      state.isLoggedIn = false;
    },
  },
});

export const {setAccount, connect} = accountSlice.actions;
export const auditorActions = auditorSlice.actions;
export const investorActions = investorSlice.actions;
export const projectDeveloperActions = projectDeveloperSlice.actions;
export const communityMemberActions = communityMemberSlice.actions;
export const sidebarActions = sidebarSlice.actions;

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    auditor: auditorSlice.reducer,
    investor: investorSlice.reducer,
    projectDeveloper: projectDeveloperSlice.reducer,
    communityMember: communityMemberSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});