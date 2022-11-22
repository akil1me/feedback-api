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
    setEdite: (state, { payload }) => {
      const feedbackList = state.feedbackList;
      const index = feedbackList.findIndex(item => item.id === +payload.id);
      state.feedbackList = [...feedbackList.slice(0, index), payload, ...feedbackList.slice(index + 1)]
    },
    setDelete: (state, { payload }) => {
      const feedbackList = state.feedbackList;
      const index = feedbackList.findIndex(item => item.id === +payload)
      state.feedbackList = [...feedbackList.slice(0, index), ...feedbackList.slice(index + 1)];
    }

  }
})