import { useDispatch, useSelector } from "react-redux"
import { language } from "../UTILS/Languageconst"
import { OPENAI_API_KEY } from "../UTILS/Contants"
import { useRef } from "react"
import { GoogleGenerativeAI } from '@google/generative-ai';
import { options } from "../UTILS/Contants"
import {addgptMovies} from "../UTILS/GPTSlice";


export const GptSearchBar=()=>{
 const genAI = new GoogleGenerativeAI(OPENAI_API_KEY);
   const dispatch=useDispatch()
    const inputValues=useRef(null)
  const selectlang= useSelector(store=>store?.language?.selectLang)

  const Searchmves=async(mve)=>{

    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ mve +"&include_adult=false&language=en-US&page=1", options);
     const array = await data.json()
    return array.results
  }  
  const HandleGptSearch= async()=>{
    console.log(inputValues?.current?.value);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " 
                          + inputValues.current.value + 
                          ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        
            const result = await model.generateContent(gptQuery);
        if(!result)return 
            const gptMovies = result?.response?.candidates[0]?.content?.parts[0]?.text?.split(",")
            console.log(gptMovies)
            const tmdbMovies=  await Promise.all(gptMovies.map(mve=>Searchmves(mve)))
            console.log(tmdbMovies)
            dispatch(addgptMovies({gptMoviesNames:gptMovies,gptMoviesResults:tmdbMovies}))

           
  } 

    return(<div className="flex justify-center pt-[40%] md:pt-[7%]"> 
        <form onSubmit={(e)=>e.preventDefault()} className= " w-full md:w-1/2  bg-black grid grid-cols-12">
            <input ref={inputValues} className=" p-2 m-2 col-span-10 "type="text" placeholder={language[selectlang]?.GptPlaceholder} />
            <button  className="bg-red-800   p-1 m-2  col-span-2 text-white rounded-lg" 
            onClick={HandleGptSearch}
            > {language[selectlang]?.Search}</button>
        </form>
    </div>)
}