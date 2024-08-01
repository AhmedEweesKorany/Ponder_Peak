import { configureStore } from "@reduxjs/toolkit";
import  userReducers  from "./reducers/userReducer";

const store = configureStore({
    reducer:{
        user: userReducers
    }
})
 
export default store;