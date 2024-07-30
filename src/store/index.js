import { configureStore } from "@reduxjs/toolkit";
import  countReducers  from "./reducers/countReducer";

const store = configureStore({
    reducer:{
        count: countReducers
    }
})
 
export default store;