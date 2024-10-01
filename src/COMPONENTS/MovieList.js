import React, { useRef } from 'react';
import { Moviecard } from "./Moviecard";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

export const Movielist = ({ title, movies }) => {
    const sliderRef = useRef(null);
    const scrollAmount = 750; // The amount to scroll when clicking the navigation button
return (
        <div>
            <div className='flex justify-between'>
                <h1 className="text-bold text-2xl pl-14 py-5 text-white">{title}</h1>
                <div className='flex mr-8'>
                    <button className='text-white text-2xl'  onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
        }}>
                        <FaChevronLeft />
                    </button>
                    
                    <button className='text-white text-2xl'  onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="flex overflow-hidden" ref={sliderRef} style={{transition: "0.5s ease-in-out" }}>
                <div className="flex pl-16  "  >
                    {movies?.map((x) => (
                        <Moviecard key={x?.id} poster_path={x?.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};
