import { createSlice } from "@reduxjs/toolkit";

export const { actions: feedbacksActions, reducer: feedbacksReducer } = createSlice({
  name: "feedbacks",
  initialState: {
    feedbackList: [],
    loading: false,
  },
  reducers: {
    setFeedbackList: (state, { payload }) => {
      state.feedbackList = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  }
})