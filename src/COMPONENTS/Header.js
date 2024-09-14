import Nlogo from "./Netflix_Logo.png"


export const Header=()=>{
    return( 
        <div>
        <div className="absolute w-60 py-8 px-2 z-10 "  >
        <img  src={Nlogo} alt="Logo"/>
       
        </div></div>
        

    )
}