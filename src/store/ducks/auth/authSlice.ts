import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./authThunk";

export interface InitialStateType {
  userInfo: any | null;
  loading: boolean;
  error: boolean;
}

const initialState = {
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
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log(action.error);
      })
});

export const { clearUserState } = authSlice.actions;
export default authSlice.reducer;
