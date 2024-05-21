import { createSlice } from "@reduxjs/toolkit";


const loginCheck=createSlice({
    name:'loginCheck',
    initialState:false,
    loginUser:(state,action)=>{
        return action.payload;
    }
})
export const {authCheck}=loginCheck.actions;
export default loginCheck.reducer;