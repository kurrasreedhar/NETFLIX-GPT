import {useSelector} from "react-redux"
import {VideoTitle} from  "./VideoTitle"
import { VideoBg } from "./Videobg"

export const Maincomp =()=>{

  const movies= useSelector((store)=>store.movies.TopRated) 
  if(!movies) return;
   
  const mainMovies= movies[2];
  const {original_title,overview,id} = mainMovies;

    return<div className="pt-[34%] bg-black md:pt-0">
      
       <VideoTitle title={original_title} overview={overview} />
       <VideoBg movieId={id} />
    </div>
}