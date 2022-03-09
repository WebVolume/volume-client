import { SignInResponseType, SignInRequestType } from "./auth.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk<SignInResponseType, SignInRequestType>(
  "auth/signIn",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post<SignInResponseType>(
        "https://volume-server-api.herokuapp.com/api/login",
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
