import { createSlice } from "@reduxjs/toolkit";

 const languageSlice = createSlice({
    name:"language",
    initialState:{
        selectLang:"en"
    },
    reducers:{
        changeLang:(state,action)=>{
            state.selectLang=action.payload
        }
    }
 })
 export const{changeLang} = languageSlice.actions
 export default languageSlice.reducer
 