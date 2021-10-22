import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        data: [],
    },
    reducers: {
        loadPosts: (state, { payload }) => {
            state.data = payload;
        },

        addNewPosts: (state, { payload }) => {
            state.data.concat(payload);
        },
    },
});

export const { loadPosts, addNewPosts } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
