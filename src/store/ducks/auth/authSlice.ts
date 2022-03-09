import { createSlice } from "@reduxjs/toolkit";

import { signIn } from "./authThunk";

export interface InitialStateType {
  userInfo: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: InitialStateType = {
  userInfo: null,
  loading: false,
  error: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUserState: state => {
      state.userInfo = null;
    }
  },
  extraReducers: build =>
    build
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = false;
        // console.log("pending");
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.id;
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
        // console.log("signInFufil");
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        // console.log("siginReject");
        // console.log(action.payload);
      })
});

export const { clearUserState } = authSlice.actions;
export default authSlice.reducer;
