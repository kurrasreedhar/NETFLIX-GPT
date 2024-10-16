import { CDN_IMG } from "../UTILS/Contants"

export const Moviecard=({poster_path})=>{
    if(!poster_path) return null

    return(<div  className=" w-44 bg-transparent pr-4">
         <img  className=" w-36 h-45 md:w-48 h-60" src={CDN_IMG + poster_path} alt="Mcimg" />
    </div>)
}