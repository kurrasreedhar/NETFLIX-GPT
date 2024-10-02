import NowPlayingMves from "../Hooks/NowPlayingMves"
import { Header } from "./Header"
import {Maincomp} from "./Maincomp"
import {Secondarycomp} from "./Secondarycomp"
import Popular from "../Hooks/Popular"
import TopRated from "../Hooks/Toprated"
import { useSelector } from "react-redux"
import  {GptSearch} from "./GptSearch"

export const Browse=()=>{

    const Searchtoggle = useSelector(store=>store.gpt.showGptSearch)
    
   NowPlayingMves();
   Popular()
   TopRated()

    return(<div>
        <Header/>
        {Searchtoggle ?  <GptSearch/> :<> <Maincomp/> <Secondarycomp/></>}
    </div>)
}