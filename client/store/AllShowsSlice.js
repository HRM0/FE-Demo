import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

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

export const addNewShow = createAsyncThunk(
    "newShow", async(show) => {
        try {
            const {data} = await axios.post("/api/tvshows", show)
            return data
        } catch (err) {
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
        }),
        builder.addCase(addNewShow.fulfilled, (state, action) => {
            const currentShows = state.showList
            currentShows.push(action.payload)
            state.showList = [...currentShows]
        })
    }
})

export default allShowsSlice.reducer