import { createSlice } from "@reduxjs/toolkit";

import {
  signIn,
  signUp,
  getKakaoInfo,
  getKakaoToken,
  checkUserExist,
  checkIdDuplication
} from "./authThunk";
export interface InitialStateType {
  userInfo: string | null;
  loading: boolean;
  socialEmail: string | null;
  error: boolean;
  usableId: boolean;
}

const initialState: InitialStateType = {
  userInfo: null,
  socialEmail: null,
  loading: false,
  error: false,
  usableId: true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUserState: state => {
      state.userInfo = null;
    },
    getUserStateFromLocal: state => {
      state.userInfo = localStorage.getItem("userInfo");
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
        // 차후에 백엔드에서 작업해주면 바꿔야함.
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
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
        // state.socialEmail = action.payload.email;
      })
      .addCase(getKakaoInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(checkUserExist.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(checkUserExist.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.exist) {
          // 차후에 백엔드에서 작업해주면 바꿔야함.
          state.userInfo = action.payload.email;
          localStorage.setItem("userInfo", JSON.stringify(action.payload));
        } else {
          state.socialEmail = action.payload.email;
        }
      })
      .addCase(checkUserExist.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        // 차후에 백엔드에서 작업해주면 바꿔야함.
        state.userInfo = action.payload.id;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(checkIdDuplication.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(checkIdDuplication.fulfilled, (state, action) => {
        state.loading = false;
        state.usableId = !action.payload.exist;
      })
      .addCase(checkIdDuplication.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
});

export const { clearUserState, getUserStateFromLocal } = authSlice.actions;
export default authSlice.reducer;
