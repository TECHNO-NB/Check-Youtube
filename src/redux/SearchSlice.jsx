import { createSlice } from "@reduxjs/toolkit";

export const searchSlice=createSlice({
    name:'search',
    initialState:"",
    reducers:{
    setSearchTerm:(state,action)=>{
        return action.payload;
    }
    }
})


export const {setSearchTerm}=searchSlice.actions;
export default searchSlice.reducer;