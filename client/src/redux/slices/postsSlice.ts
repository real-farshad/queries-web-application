import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        search: "",
        sort: "publish_date",
        page: 1,
        numberOfPages: 1,
        data: [],
    },
    reducers: {
        changeSearch: (state, { payload }) => {
            state.search = payload;
        },

        changeSort: (state, { payload }) => {
            state.sort = payload;
        },

        changePage: (state, { payload }) => {
            state.page = payload;
        },

        changeNumberOfPages: (state, { payload }) => {
            state.numberOfPages = payload;
        },

        loadPosts: (state, { payload }) => {
            state.data = payload;
        },

        addNewPosts: (state, { payload }) => {
            state.data = state.data.concat(payload);
        },
    },
});

export const {
    changeSearch,
    changeSort,
    changePage,
    changeNumberOfPages,
    loadPosts,
    addNewPosts,
} = postsSlice.actions;

export const selectSearch = (state: RootState) => state.posts.search;
export const selectSort = (state: RootState) => state.posts.sort;
export const selectPage = (state: RootState) => state.posts.page;
export const selectNumberOfPages = (state: RootState) => state.posts.numberOfPages;
export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
