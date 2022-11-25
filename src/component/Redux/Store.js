import { configureStore } from "@reduxjs/toolkit";
import postReducer from './counterSlice'
const store =configureStore({
    reducer:{
        post:postReducer
    }
})

export default store;