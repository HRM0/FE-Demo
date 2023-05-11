import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { all } from "axios";

export const fetchSingleShow = createAsyncThunk(
    "singleShow", async(showId) => {
        try {
            const {data} = await axios.get(`/api/tvshows/${showId}`)
            console.log(data)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

const singleShowSlice = createSlice({
    name:"singleShow",
    initialState: {
        singleShow:[]
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleShow.fulfilled, (state, action) => {
            state.singleShow = action.payload
        })
    }
})

export default singleShowSlice.reducer