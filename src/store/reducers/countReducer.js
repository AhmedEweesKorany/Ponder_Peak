import { createSlice } from "@reduxjs/toolkit";

const countSlice  = createSlice({
    name: 'count',
    initialState: {number:0},
    reducers: {
        countChange(state,action){
            state.number = action.payload
        },
        increament(state){
            state.number++
        }
    }
})


export const {countChange,increament} = countSlice.actions;

export default countSlice.reducer;