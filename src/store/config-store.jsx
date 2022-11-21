import { configureStore } from "@reduxjs/toolkit";
import { feedbacksReducer } from "./feedbacks/feedbacks.slice";
import { loginReducer } from "./login/login.slice";

export const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    login: loginReducer,
  },
})