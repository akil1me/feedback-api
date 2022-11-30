import { createSlice } from "@reduxjs/toolkit";

export const { actions: loginActions, reducer: loginReducer } = createSlice({
  name: "login",
  initialState: {
    login: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },

  reducers: {
    setLogin: (state, { payload }) => {
      const login = state.login;
      state.login = payload;
      localStorage.setItem("user", JSON.stringify(payload))
    }
  }

})