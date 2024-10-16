import { options } from "../UTILS/Contants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPlayingMovies } from "../UTILS/moviesSlice"


const NowPlayingMves = ()=>{ 
    const Movies= useSelector(store=>store.movies.nowPlayingMovies)

const dispatch = useDispatch()
    useEffect(()=>{
        !Movies && GetNowPlaying()
            
    },[])

    const GetNowPlaying = async()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const Mdata = await data.json()
     
        dispatch(addPlayingMovies(Mdata.results))
    }}

    export default NowPlayingMves