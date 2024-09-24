import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';




 export const VideoTitle=({title,overview})=>{
    return <div className="  pt-64 px-12 absolute  bg-gradient-to-r from-black aspect-video">
       <h1 className="font-bold  text-white text-4xl">{title}</h1>
       <p className="py-9 text-xl  text-white w-2/5">{overview}</p>
       <div className="flex space-x-4 p-4"> 
            {/* Play Icon Button */}
            <button className="flex items-center p-2 px-5 bg-white text-black rounded hover:bg-stone-400">
                <PlayIcon className="h-6 w-6" aria-hidden="true" />
                <span className="ml-2">Play</span>
            </button>

            {/* Information Icon Button */}
            <button className="flex items-center p-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-200   ">
                <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
                <span className="ml-2">More Info</span>
            </button>
        </div>
    </div>
 }