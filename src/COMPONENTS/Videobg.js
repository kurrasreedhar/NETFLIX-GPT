import {  useSelector } from "react-redux"
import useTrailer from "../Hooks/Trailer"



export const VideoBg=({movieId})=>{

   
const bgtrailerid= useSelector(store=>store.movies?.bckGroundTrailer)
  useTrailer(movieId)


    return(<div className="">
        <iframe className=" w-screen aspect-video" 
        
        src={"https://www.youtube.com/embed/"+bgtrailerid?.key +"?autoplay=1&mute=1"}
          title="YouTube video player"
          
           allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            ></iframe>
     
    </div>)
}