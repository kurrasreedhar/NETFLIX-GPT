import React, { useRef } from 'react';
import { Moviecard } from "./Moviecard";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

export const Movielist = ({ title, movies }) => {
    const sliderRef = useRef(null);
    const scrollAmount = 450; // The amount to scroll when clicking the navigation button
return (
        <div>
            <div className='flex justify-between'>
                <h1 className="text-bold  text-lg md:text-2xl pl-8 md:pl-14 py-5 text-white">{title}</h1>
                <div className='flex mr-8'>
                    <button className='text-white text-lg md:text-2xl'  onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
        }}>
                        <FaChevronLeft />
                    </button>
                    <button className='text-white text-lg md:text-2xl'  onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="flex overflow-hidden" ref={sliderRef} style={{scrollBehavior:"smooth", transition:"0.4s" }}>
                <div className="flex pl-8 md:pl-16  "  >
                    {movies?.map((x) => (
                        <Moviecard key={x?.id} poster_path={x?.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};
