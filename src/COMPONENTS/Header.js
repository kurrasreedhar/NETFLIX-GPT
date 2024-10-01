import Nlogo from "./Netflix_Logo.png";
import {auth } from "../UTILS/firebase"
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../UTILS/userSlice";
import ULogo from "./usericon.png"
import { toggleGptSearch } from "../UTILS/GPTSlice";
import {SupportedLanguage} from "../UTILS/Contants"
import { changeLang } from "../UTILS/LanguagesSlice";

export const Header=()=>{

  const user = useSelector(store=>store.user)
  const Value= useSelector(store=>store.gpt.showGptSearch)
  
  const dispatch= useDispatch()
  const navigate = useNavigate()

  const HandLeChangeLang=(e)=>{
    dispatch(changeLang(e.target.value))
  }
   const Handlegpt=()=>{
      dispatch(toggleGptSearch())
   }

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
})},[]) 


    return( 
      <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
              <img className="w-44" src={Nlogo} alt="logo" />
      { user &&
       <div className="flex mt-3 ">
       { Value && <select className="p-2 m-3 pt-2 rounded-lg bg-slate-600 text-white" onChange={HandLeChangeLang}>
          { SupportedLanguage.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>))
          }
        </select>}
        <button className="bg-indigo-900 text-sm text-white px-3 m-3 mt-2  mr-10 rounded-lg " onClick={Handlegpt} > 
          {Value? "Home" : "Gpt search"}</button>
        <img className="w-12 h-12 " alt="usericon" src={ULogo} />
               <button  className="font-bold text-white -mt-2" onClick={Handlesignout}>Sign Out</button> 
       </div>}
       </div>)
}