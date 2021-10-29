import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        sort: "publish_date",
        page: 1,
        data: [],
    },
    reducers: {
        changeSort: (state, { payload }) => {
            state.sort = payload;
        },

        changePage: (state, { payload }) => {
            state.sort = payload;
        },

        loadPosts: (state, { payload }) => {
            state.data = payload;
        },

        addNewPosts: (state, { payload }) => {
            state.data.concat(payload);
        },
    },
});

export const { changeSort, changePage, loadPosts, addNewPosts } = postsSlice.actions;

export const selectSort = (state: RootState) => state.posts.sort;
export const selectPage = (state: RootState) => state.posts.page;
export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
