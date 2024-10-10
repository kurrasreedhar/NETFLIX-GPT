import { createSlice } from "@reduxjs/toolkit";

 
 const gptSlice = createSlice({
    name:"Gpt",
    initialState:{
        showGptSearch: false,
        gptMoviesNames:null,
        gptMoviesResults:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
       addgptMovies:(state,action)=>{
         const {gptMoviesNames,gptMoviesResults}=action.payload;
         state.gptMoviesNames=gptMoviesNames;
         state.gptMoviesResults=gptMoviesResults
        }

    }
 })
  export const {toggleGptSearch,addgptMovies} = gptSlice.actions;
  export default gptSlice.reducer