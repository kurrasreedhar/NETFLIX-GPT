import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies:null,
        bckGroundTrailer:null
    },
    reducers:{
       addPlayingMovies:(state,action)=>{
        state.nowPlayingMovies= action.payload
       },
       addMoviesTrailer:(state,action)=>{
        state.bckGroundTrailer= action.payload
       }
    }
})

export  const {addPlayingMovies,addMoviesTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;
