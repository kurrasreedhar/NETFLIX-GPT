import { CDN_IMG } from "../UTILS/Contants"

export const Moviecard=({poster_path})=>{

    return(<div  className=" w-44 bg-transparent pr-4">
         <img  src={CDN_IMG + poster_path} alt="Mcimg" />
    </div>)
}