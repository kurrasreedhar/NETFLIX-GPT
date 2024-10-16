import { useSelector } from "react-redux"
import { options } from "../UTILS/Contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToprated } from "../UTILS/moviesSlice"


const TopRated = ()=>{ 
    const Movies=useSelector(store=>store.movies.TopRated)

const dispatch = useDispatch()
    useEffect(()=>{
       !Movies && GetTopRated()
       
    },[])
     console.log("gtr")
    const GetTopRated = async()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const Mdata = await data.json()
   
        dispatch(addToprated(Mdata.results))
        
    }}

    export default TopRated;