
import { Browse } from "./Browse"
import { Login } from "./Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"

export const Body=()=>{
  
    return (<div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/Browse" element= {<Browse/>}/>
        </Routes>
        </BrowserRouter>
    </div>)
}