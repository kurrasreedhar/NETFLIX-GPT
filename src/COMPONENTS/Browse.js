import NowPlayingMves from "../Hooks/NowPlayingMves"
import { Header } from "./Header"
import {Maincomp} from "./Maincomp"
import {Secondarycomp} from "./Secondarycomp"

export const Browse=()=>{

   NowPlayingMves();

    return(<div>
        <Header/>
        <Maincomp/>
        <Secondarycomp/>
    </div>)
}