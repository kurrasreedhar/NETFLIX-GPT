import { useSelector } from "react-redux"
import { language } from "../UTILS/Languageconst"



export const GptSearchBar=()=>{
  const selectlang= useSelector(store=>store?.language?.selectLang)

    return(<div className="flex justify-center pt-[7%]"> 
        <form className= " w-1/2  bg-black grid grid-cols-12">
            <input className="  p-2 m-3 col-span-10 "type="text" placeholder={language[selectlang]?.GptPlaceholder} />
            <button className="bg-red-800 p-2 m-2 col-span-2 text-white rounded-lg"> {language[selectlang]?.Search}</button>
        </form>
    </div>)
}