import Nlogo from "./Netflix_Logo.png";
import {auth } from "../UTILS/firebase"
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./userSlice";
import ULogo from "./usericon.png"

export const Header=()=>{

  const user = useSelector(store=>store.user)
  
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const Handlesignout=()=>{
       //signout
    signOut(auth).then(() => {
    
    }).catch((error) => {
       console.log(error)
    });
    
  }
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
    if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({
      uid:uid,email:email,displayName:displayName,photoURL:photoURL
    }))
    navigate("/Browse")

  } else {
    dispatch(removeUser());
    navigate("/");
    }
})
}
,[]) 


    return( 
      <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
              <img className="w-44" src={Nlogo} alt="logo" />
      { user && <div className="flex p-2 m-0">
        <img className="w-12 h-12" alt="usericon" src={ULogo} />
               <button  className="font-bold text-white" onClick={Handlesignout}>Sign Out</button> 
       </div>}
       </div>)
}