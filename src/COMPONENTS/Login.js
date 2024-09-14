import { Header } from "./Header"
import Logo from "./Nbimg.jpg"
import {useState} from "react"

export const Login=()=>{

    const [Signin ,setSignin]= useState(true);

    const ToggleSign=()=>{
      setSignin(!Signin)
    }
    return(<div>
          
         <Header/>

            <div  className="absolute">
            <img className="w-full "src={Logo} alt="Logo"/>
            </div>

            <form  className="w-3/12 absolute py-10 bg-black mx-auto right-0 left-0 my-40 h-fit text-white text-xl bg-opacity-80 rounded-xl ">
            <h1 className="font-bold  text-3xl p-2 mx-12 my-6 ">{Signin ? "Sign In" : "Sign Up"  }</h1>
         { !Signin &&   <input type="Name" placeholder="Full Name"  className=" w-9/12 p-3 mx-12 my-4 bg-slate-600 rounded-xl"/>}
            <input type="email" placeholder="Email Address"  className=" w-9/12 p-3 mx-12 my-4 bg-slate-600 rounded-xl"/>
            <input type="password" placeholder="Password" className=" w-9/12 p-3 mx-12 my-4 bg-slate-600 rounded-xl" />
            <button className="bg-red-700  w-9/12 p-3 mx-12 my-4 rounded-xl">{Signin ? "Sign In" : "Sign Up"  }</button>
            <p className="mx-12 my-4 cursor-pointer  " onClick={ToggleSign}>  {Signin ? "New to Netflix! SignUp Now" : " Already a member? signIn now "}</p>
            </form>
         
         </div>)
}