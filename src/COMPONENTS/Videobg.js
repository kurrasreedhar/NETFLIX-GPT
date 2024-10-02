import { useEffect } from "react"
import {options} from "../UTILS/Contants"
import { useDispatch, useSelector } from "react-redux"
import {addMoviesTrailer } from "../UTILS/moviesSlice"


export const VideoBg=({movieId})=>{

   
const dispatch=useDispatch()
const bgtrailerid= useSelector(store=>store.movies?.bckGroundTrailer)
 
const Videodta=async()=>{
   const data= await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', options)


   const Json= await data.json()
   

   const Filterdata =Json.results.filter((video)=>video.type==="Trailer")
    const trailer = Filterdata.length? Filterdata[0] : Json.results[0]

      dispatch(addMoviesTrailer(trailer))
      
      
}
useEffect(()=>{
Videodta()
},[])
    return(<div className="">
        <iframe className=" w-screen aspect-video" 
        
        src={"https://www.youtube.com/embed/"+bgtrailerid?.key +"?autoplay=1&mute=1"}
          title="YouTube video player"
          
           allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            ></iframe>
     
    </div>)
}