

import { options } from "../UTILS/Contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopular } from "../UTILS/moviesSlice"


const Popular = ()=>{ 

const dispatch = useDispatch()
    useEffect(()=>{
        GetPopular()
    },[])

    const GetPopular = async()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', options)
        const Mdata = await data?.json()
   
        dispatch(addPopular(Mdata?.results))
        
    }}

    export default Popular;