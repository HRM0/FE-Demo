import { configureStore } from "@reduxjs/toolkit";
import allShowsSlice from "./AllShowsSlice";
import singleShowSlice from "./singleShowSlice";

const store = configureStore({
    reducer: {
        allShows: allShowsSlice,
        singleShow:singleShowSlice
    }
})

export default store