import { createAsyncThunk } from "@reduxjs/toolkit";
import * as URLS from "../../urls";
import axios from "../../utils/axios";

export const signIn = createAsyncThunk(
  "delivery/signIn",
  async (data, thunkAPI) => {
    try {
      //email password,fcmtoken
      const response = await axios.post(URLS.signInURL, data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const validateEmail = createAsyncThunk(
  "delivery/validateEmail",
  async (params, thunkAPI) => {
    try {
      //Email
      const response = await axios.put(URLS.validateEmailURL, null, { params });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const confirmAccountCode = createAsyncThunk(
  "delivery/confirmAccountCode",
  async (data, thunkAPI) => {
    try {
      //email verifyCode,fcmtoken
      const response = await axios.put(URLS.confirmAccountCodeURL, data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const resetCode = createAsyncThunk(
  "delivery/resetCode",
  async (params, thunkAPI) => {
    try {
      //Email select => 0,1
      const response = await axios.put(URLS.resetCodeURL, null, { params });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
