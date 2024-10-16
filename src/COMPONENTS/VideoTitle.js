import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

export const VideoTitle=({title,overview})=>{
    return <div className="w-screen aspect-video pt-[15%] md:pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
       <h1 className="font-bold  text:xl  text-white md:text-2xl">{title}</h1>
       <p className="py-9 text-xl  hidden md:inline-block text-white w-4/12">{overview}</p>
       <div className="flex space-x-4 p-4"> 
            {/* Play Icon Button */}
            <button className="flex items-center p-1 px-2 md:p-2 md:px-5 bg-white text-black rounded hover:bg-stone-400">
                <PlayIcon className=" h-3 md:h-6 w-3 md:w-6" aria-hidden="true" />
                <span className="ml-1 md:ml-2">Play</span>
            </button>

            {/* Information Icon Button */}
            <button className="hidden md:flex items-center p-2  bg-gray-300 text-gray-900 rounded hover:bg-gray-200   ">
                <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
                <span className="ml-2">More Info</span>
            </button>
        </div>
    </div>
 }