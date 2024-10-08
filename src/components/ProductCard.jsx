import React, { useState } from 'react'
import { MdStarRate } from "react-icons/md";
import { SiGooglelens } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ProductCard = ({ currElm, searchBar}) => {
    const [isHover, setIsHover] = useState(null);
    const [cart, setCart] = useState(null);
    
    const handleIndex = (index) => {
        setIsHover(index);
    }
    useEffect(() => {
        setTimeout(() => {
            AOS.init({duration: 1000});
        }, 1000);
    },[]);

    return (
        <div className={`h-96 ${searchBar ? "sm:h-60 md:h-96" : "sm:h-auto md:h-auto"} overflow-hidden cursor-pointer p-0.5 rounded-md`} data-aos={`${searchBar ? "" : "zoom-in"}`}>
            <div className="w-full group flex items-center justify-center relative border transition duration-300 border-gray-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden rounded-md" >
                <img src={isHover === currElm.id ? currElm.hoverImg : currElm.img} alt="" className={`w-full ${isHover === currElm.id && "animate-opacity"}`} onMouseEnter={() => handleIndex(currElm.id)} onMouseLeave={() => handleIndex(null)} />
                <div className={`absolute divide-x group-hover:grid hidden grid-cols-4 items-center justify-center divide-gray-400 w-3/4 sm:w-full h-10 sm:h-9 animate-opacity bg-gray-200 border border-gray-300 text-slate-500 text-lg top-1/2`}>
                    <div className="flex items-center justify-center">
                        <SiGooglelens className='hover:text-red-700 transition-colors duration-300' />
                    </div>
                    <div className="flex items-center justify-center">
                        <IoMdCart className='hover:text-red-700 transition-colors duration-300' onClick={() => setCart(currElm.id)}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaHeart className='hover:text-red-700 transition-colors duration-300' />
                    </div>
                    <div className="flex items-center justify-center">
                        <LuRefreshCcw className='hover:text-red-700 transition-colors duration-300' onClick={() => window.location.reload()} />
                    </div>
                </div>
            </div>
            <p className=' uppercase text-lg sm:text-sm font-bold mt-2 hover:text-red-500 transition-colors'>{currElm.name}</p>
            <div className="flex sm:flex-col justify-between items-center sm:items-start mt-2 sm:mt-0">
                <div className="sm:w-full flex items-center sm:justify-between sm:pr-2">
                    <p className={`text-lg sm:text-sm font-bold line-through decoration-2 text-gray-400 ${searchBar && 'text-white'}`}>${currElm.discount}</p>
                    <p className='text-lg sm:text-sm font-bold text-red-500 ml-5'>${currElm.price}</p>
                </div>
                <div className="flex items-center  justify-center sm:mb-0.5">
                    <MdStarRate className='text-yellow-500' />
                    <MdStarRate className='text-yellow-500' />
                    <MdStarRate className='text-yellow-500' />
                    <MdStarRate className='text-yellow-500' />
                    <p className="ms-2">({currElm.rating})</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
