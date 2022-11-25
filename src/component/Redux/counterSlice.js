import { createSlice } from "@reduxjs/toolkit";
import data from '../data'

const initialState =data

const postSlice =createSlice({
    name:'post',
    initialState,
    reducers:{
          additon: (state)=>{
            const e=[{

            }]
            return [...state,e]
          }      
    }
})

export default postSlice.reducer