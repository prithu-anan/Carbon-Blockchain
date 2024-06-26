import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const millSlice = createSlice({
  name: "mill",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("millId");
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

export const auditorActions = auditorSlice.actions;
export const millActions = millSlice.actions;
export const communityMemberActions = communityMemberSlice.actions;

export const store = configureStore({
  reducer: {
    auditor: auditorSlice.reducer,
    mill: millSlice.reducer,
    communityMember: communityMemberSlice.reducer,
  },
});