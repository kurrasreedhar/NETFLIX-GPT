import { useSelector } from "react-redux"
import { Movielist } from "./MovieList"

export const GptMoviesSuggestion=()=>{

    const {gptMoviesNames,gptMoviesResults} = useSelector(store=>store?.gpt)
    if(!gptMoviesNames) return null;

    return( <div className="p-4,m-4 bg-black text-white opacity-85">
        <div> 
            {gptMoviesNames?.map((mveName,index)=>(<Movielist 
             key={mveName} 
             title={mveName} 
             movies={gptMoviesResults[index]}/>
             ))}
    </div>
    </div>)
}