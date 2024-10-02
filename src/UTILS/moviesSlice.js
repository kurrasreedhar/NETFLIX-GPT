import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies:null,
        bckGroundTrailer:null,
        Popular:null,
        TopRated:null

    },
    reducers:{
       addPlayingMovies:(state,action)=>{
        state.nowPlayingMovies= action.payload
       },
       addMoviesTrailer:(state,action)=>{
        state.bckGroundTrailer= action.payload
        },
        addPopular:(state,action)=>{
            state.Popular= action.payload
           },
           addToprated:(state,action)=>{
            state.TopRated= action.payload
           },
    }
})

export  const {addPlayingMovies,addMoviesTrailer,addPopular,addToprated} = moviesSlice.actions;
export default moviesSlice.reducer;
