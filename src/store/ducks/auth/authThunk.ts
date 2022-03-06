import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk<any, any>(
  "auth/signIn",
  async (payload, { rejectWithValue, getState }) => {
    // TODO: call API here
    return await axios
      .post("https://volume-server-api.herokuapp.com/api/login", payload)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return rejectWithValue(error);
      });
  }
);
