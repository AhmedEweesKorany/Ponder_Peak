import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name: 'user',
    initialState: {userInfo:JSON.parse(localStorage.getItem("account")) || null    },
    reducers: {
       setUserInfo(state,action){
         state.userInfo = action.payload
       }
    }
})


export const {setUserInfo} = userSlice.actions;

export default userSlice.reducer;