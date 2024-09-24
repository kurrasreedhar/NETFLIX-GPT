import { Header } from "./Header"
import Logo from "./Nbimg.jpg"
import {useRef, useState} from "react"
import { CheckValidateData } from "../UTILS/Validate"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../UTILS/firebase"
import {signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser } from "./userSlice";
import { useDispatch } from "react-redux";

export const Login=()=>{
    const [Signin ,setSignin]= useState(true);
    const [errormsg,seterrormsg]=useState(null)
    const dispatch = useDispatch()
    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null)

    const Handlevalidate = ()=>{
      
      const message= 
      CheckValidateData(email?.current?.value,password?.current?.value,name?.current?.value,Signin)
       seterrormsg(message)
      if(message) return;

      if(!Signin){
        
           createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            //signup
            const user = userCredential.user;
           
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
            }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({
        uid:uid,email:email,displayName:displayName,photoURL:photoURL,
      }))
              
            }).catch((error) => {
            console.log(error)
            });
             
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorCode +"-" +errorMessage)
          })}
      else
      {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode +"-"+errorMessage)
          });
      }
       
    }

    const ToggleSign=()=>{
      setSignin(!Signin)}

    return(<div className="">
          
         <Header/>

            
            <img className=" absolute w-full"src={Logo} alt="Logo"/>
            
              <form onSubmit={ (e)=>e.preventDefault() } 
              className="w-3/12 absolute py-3 bg-black mx-auto right-0 left-0 my-40 h-fit text-white text-lg bg-opacity-80  ">

            <h1 className="font-bold  text-2xl p-3 mx-12 my-4 ">
               {Signin ? "Sign In" : "Sign Up"  }  </h1>

         { !Signin &&   <input ref={name} type="text" placeholder="Full Name"  
         className="  text-sm w-9/12 p-2 mx-12 my-4 bg-slate-600 rounded-xl"/>}

            <input  ref = {email} type="text" placeholder="Email Address"  
            className="text-sm w-9/12 p-2 mx-12 my-4 bg-slate-600 rounded-xl"/>

            <input ref={password} type="password" placeholder="Password" 
            className="text-sm w-9/12 p-2 mx-12 my-4 bg-slate-600 rounded-xl" />

            <p className="text-bold text-red-700">{errormsg}</p>
            <button className="bg-red-700  text-sm w-9/12 p-3 mx-12 my-3 rounded-xl" 
            onClick={Handlevalidate} >{Signin ? "Sign In" : "Sign Up"  }</button>

            <p className="mx-10 my-3 cursor-pointer text-blue-500 underline" 
            onClick={ToggleSign}>  {Signin ? "New to Netflix! SignUp Now" : " Already a member? signIn now "}</p>
            </form>
         
         </div>)
}