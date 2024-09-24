import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../COMPONENTS/userSlice"
import moviesReducer  from "../COMPONENTS/moviesSlice";

const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer
    }
})
export default appStore ;
