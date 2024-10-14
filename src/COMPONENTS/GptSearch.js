import Logo from "./Nbimg.jpg"
import { GptSearchBar } from "./GptSearchBar"
import { GptMoviesSuggestion } from "./GptMoviesSuggestion"


export const GptSearch=()=>{
    return(<div className="">
        <img className=" fixed w-screen  -z-20"src={Logo} alt="Logo"/>
        <GptSearchBar/>
        <GptMoviesSuggestion/>
    </div>)
    }