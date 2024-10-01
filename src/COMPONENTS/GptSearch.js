import Logo from "./Nbimg.jpg"
import { GptSearchBar } from "./GptSearchBar"
import { GptMoviesSuggestion } from "./GptMoviesSuggestion"


export const GptSearch=()=>{
    return(<div className="relative w-screen h-screen overflow-hidden">
        <img className=" absolute  w-screen  -z-20"src={Logo} alt="Logo"/>
        <GptSearchBar/>
        <GptMoviesSuggestion/>
    </div>)
    }