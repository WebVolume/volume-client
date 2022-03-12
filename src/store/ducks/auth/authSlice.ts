import { createSlice } from "@reduxjs/toolkit";

import { signIn, getKakaoInfo, getKakaoToken } from "./authThunk";
export interface InitialStateType {
  userInfo: string | null;
  loading: boolean;
  kakaoEmail: string | null;
  kakaoToken: string | null;
  error: boolean;
}

const initialState: InitialStateType = {
  userInfo: null,
  kakaoEmail: null,
  kakaoToken: null,
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
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.id;
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getKakaoToken.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getKakaoToken.fulfilled, (state, action) => {
        state.loading = false;
        state.kakaoToken = action.payload.access_token;
      })
      .addCase(getKakaoToken.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getKakaoInfo.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getKakaoInfo.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.kakaoEmail = action.payload.email;
      })
      .addCase(getKakaoInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
});

export const { clearUserState } = authSlice.actions;
export default authSlice.reducer;
