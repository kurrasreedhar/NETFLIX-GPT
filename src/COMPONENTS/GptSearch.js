import Logo from "./Nbimg.jpg"
import { GptSearchBar } from "./GptSearchBar"
import { GptMoviesSuggestion } from "./GptMoviesSuggestion"


export const GptSearch=()=>{
    return(
    <><div className="fixed -z-10">
        <img className="h-screen w-screen object-cover"src={Logo} alt="Logo"/>
        </div>
    <div className="">
      <GptSearchBar/>
        <GptMoviesSuggestion/>
     </div>
    </>)
    }