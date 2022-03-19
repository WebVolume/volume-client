import {
  SignInResponseType,
  SignInRequestType,
  SignUpRequestType,
  SignUpResponseType,
  CheckDuplicationResponseType,
  CheckDuplicationRequestType
} from "./auth.type";
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

const CLIENT_ID = "f31b9f81fdf64d528eaafa1878d102c3";
const REDIRECT_URI = "http://localhost:3000/oauth/kakao"; // 변경해야함.
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const getKakaoToken = createAsyncThunk(
  "auth/getKakaoToken",
  async (payload, { dispatch, rejectWithValue, getState }) => {
    let grant_type = "authorization_code";
    let client_id = "f31b9f81fdf64d528eaafa1878d102c3";
    try {
      const { data } = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/kakao&code=${payload}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        }
      );
      window.Kakao.init(CLIENT_ID);
      window.Kakao.Auth.setAccessToken(data.access_token);
      dispatch(getKakaoInfo());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// kauth은 CORS가 열려있어 그냥 하였고
// kapi는 CORS가 닫혀있어.. SDK 사용하였습니다.
export const getKakaoInfo = createAsyncThunk(
  "auth/getKakaoInfo",
  async (payload, { dispatch, rejectWithValue, getState }) => {
    try {
      const response = await window.Kakao.API.request({
        url: "/v2/user/me"
      });
      dispatch(checkDuplication({ email: response.kakao_account.email }));
      return response.kakao_account;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const checkDuplication = createAsyncThunk<
  CheckDuplicationResponseType,
  CheckDuplicationRequestType
>("auth/checkDuplication", async (payload, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.post(
      `https://volume-server-api.herokuapp.com/api/signup/checkDuplication`,
      payload
    );
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const signUp = createAsyncThunk<SignUpResponseType, SignUpRequestType>(
  "auth/signUp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post(
        `https://volume-server-api.herokuapp.com/api/signup`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
