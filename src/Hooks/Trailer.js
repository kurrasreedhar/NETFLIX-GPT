import {options} from "../UTILS/Contants"
import { useDispatch } from "react-redux"
import {addMoviesTrailer } from "../UTILS/moviesSlice"
import { useEffect } from "react"
import {  useSelector } from "react-redux"

const useTrailer=(movieId)=>{
    
const Trailer= useSelector(store=>store.movies?.bckGroundTrailer)
const dispatch=useDispatch()

    const GetMovies=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', options)
 
 
    const Json= await data.json()
    
 
    const Filterdata =Json?.results?.filter((video)=>video?.type==="Trailer")
     const trailer = Filterdata?.length? Filterdata[0] : Json.results[0]
 
       dispatch(addMoviesTrailer(trailer))
    }
    useEffect(()=>{
       !Trailer && GetMovies()
     },[])
   
       
 }
 export default useTrailer