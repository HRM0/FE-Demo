import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { all } from "axios";

export const fetchAllShows = createAsyncThunk(
    "allShows", async() => {
        try{
            const {data} = await axios.get("/api/tvshows")
            return data
        } catch (error) {
            console.log(err)
        }
    }
)

const allShowsSlice = createSlice({
    name:"allShows",
    initialState:{
        showList:[]
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllShows.fulfilled, (state, action) => {
            state.showList = action.payload
        })
    }
})

export default allShowsSlice.reducer