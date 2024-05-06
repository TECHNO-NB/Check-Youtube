import { createSlice } from "@reduxjs/toolkit";


const loginCheck=createSlice({
    name:'loginCheck',
    initialState:false,
    loginUser:(state,action)=>{
        state=action.payload;
    }
})

export default loginCheck.reducer;