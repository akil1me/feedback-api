import { createSlice } from "@reduxjs/toolkit";

export const { actions: loginActions, reducer: loginReducer } = createSlice({
  name: "login",
  initialState: {
    login: null,
  },

  reducers: {
    setLogin: (state, { payload }) => {
      state.login = payload
    }
  }

})