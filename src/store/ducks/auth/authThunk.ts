import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk<any, any>(
  "auth/signIn",
  (payload, { rejectWithValue, getState }) => {
    // TODO: call API here
  }
);
