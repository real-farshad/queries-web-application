import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        data: null,
    },
    reducers: {
        addFavorites: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export const { addFavorites } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.data;

export default favoritesSlice.reducer;
