import { createSlice } from "@reduxjs/toolkit";
import data from '../data'

const initialState =data

const postSlice =createSlice({
    name:'post',
    initialState,
    reducers:{
          additon: (state,value)=>{
          const index = state.map((id)=>{ return id.title}).indexOf(value)
          state.splice(index,1)
          return state
          }      
    }
})

export default postSlice.reducer