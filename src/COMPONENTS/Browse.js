import NowPlayingMves from "../Hooks/NowPlayingMves"
import { Header } from "./Header"
import {Maincomp} from "./Maincomp"
import {Secondarycomp} from "./Secondarycomp"
import Popular from "../Hooks/Popular"
import TopRated from "../Hooks/Toprated"

export const Browse=()=>{

   NowPlayingMves();
   Popular()
   TopRated()

    return(<div>
        <Header/>
        <Maincomp/>
        <Secondarycomp/>
    </div>)
}