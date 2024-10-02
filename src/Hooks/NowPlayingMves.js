import { options } from "../UTILS/Contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPlayingMovies } from "../COMPONENTS/moviesSlice"


const NowPlayingMves = ()=>{ 

const dispatch = useDispatch()
    useEffect(()=>{
        GetNowPlaying()
    },[])

    const GetNowPlaying = async()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const Mdata = await data.json()
     
        dispatch(addPlayingMovies(Mdata.results))
    }}

    export default NowPlayingMves