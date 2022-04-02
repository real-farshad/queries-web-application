import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        data: [],
    },
    reducers: {
        loadFavorites(state, { payload }) {
            state.data = payload;
        },
    },
});

export const { loadFavorites } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.data;

export default favoritesSlice.reducer;
