import { configureStore } from "@reduxjs/toolkit";
import allShowsSlice from "./AllShowsSlice";

const store = configureStore({
    reducer: {
        allShows: allShowsSlice
    }
})