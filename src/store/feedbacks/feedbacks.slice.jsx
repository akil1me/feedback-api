import { createSlice } from "@reduxjs/toolkit";

export const { actions: feedbacksActions, reducer: feedbacksReducer } = createSlice({
  name: "feedbacks",
  initialState: {
    feedbackList: [],
    loading: false,
    filter: null,
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
    },
    setAddComment: (state, { payload }) => {
      const feedbackList = state.feedbackList;
      const index = feedbackList.findIndex(item => item.id === +payload.id);
      state.feedbackList = [...feedbackList.slice(0, index), payload, ...feedbackList.slice(index + 1)]
    },
    setFilterFeedbackList: (state, { payload }) => {
      const feedbackList = state.feedbackList;
      const feedbackListFilter = feedbackList.filter(item => {
        if (payload === "All") {
          return item;
        }
        else {
          return item.type === payload
        }
      });
      state.filter = feedbackListFilter;
    },

    setSortFeedback: (state, { payload }) => {
      const feedbackList = state.feedbackList;

      if (payload === "most-upvotes") {
        const feedSort = feedbackList.sort((a, b) => b.likes - a.likes)
        state.feedbackList = feedSort;
      }
      else if (payload === "least-upvotes") {
        const feedSort = feedbackList.sort((a, b) => a.likes - b.likes)
        state.feedbackList = feedSort;
      }

      else if (payload === "most-comments") {
        const feedSort = feedbackList.sort((a, b) => b.comments.length - a.comments.length)
        state.feedbackList = feedSort;
      }
      else if (payload === "least-comments") {
        const feedSort = feedbackList.sort((a, b) => a.comments.length - b.comments.length)
        state.feedbackList = feedSort;
      }
    }
  }
})