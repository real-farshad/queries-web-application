import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        pageLoading: true,
        postsLoading: false,
    },
    reducers: {
        startPageLoading: (state) => {
            state.pageLoading = true;
        },

        finishPageLoading: (state) => {
            state.pageLoading = false;
        },

        startPostsLoading: (state) => {
            state.postsLoading = true;
        },

        finishPostsLoading: (state) => {
            state.postsLoading = false;
        },
    },
});

export const {
    startPageLoading,
    finishPageLoading,
    startPostsLoading,
    finishPostsLoading,
} = loadingSlice.actions;

export const selectPageLoading = (state: RootState) => state.loading.pageLoading;
export const selectPostsLoading = (state: RootState) => state.loading.postsLoading;

export default loadingSlice.reducer;
