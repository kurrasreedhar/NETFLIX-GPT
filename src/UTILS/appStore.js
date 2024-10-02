import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer  from "./moviesSlice";
import gptReducer from "./GPTSlice";
import languageReducer from "./LanguagesSlice"

const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        language:languageReducer
    }
})
export default appStore ;