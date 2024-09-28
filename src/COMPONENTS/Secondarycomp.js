import { Movielist } from "./MovieList"
import { useSelector } from "react-redux"


export const Secondarycomp =()=>{

const Movies=useSelector((store)=>store?.movies?.nowPlayingMovies)
const PMovies = useSelector((store)=>store?.movies?.Popular)
const RMovies = useSelector((store)=>store?.movies?.TopRated)

    return<div className="bg-black">
        <div className=" -mt-60 relative z-20">
        <Movielist title={"Now Playing"} movies={Movies}/>
        <Movielist title={"Popular"} movies={PMovies}/>
        <Movielist title={"TopRated"} movies={RMovies}/>
   
        </div>
    </div>
}