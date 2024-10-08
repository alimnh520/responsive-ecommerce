import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const Collections = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    return(
        <div className="w-full mt-24 sm:mt-10 md:mt-10 sm:px-5 px-20 md:px-10 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-2 grid-rows-2 sm:grid-rows-none md:grid-rows-none">
            <div className="bg-stone-200 transition-all duration-300 hover:shadow-[0_0_8px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer"  data-aos="zoom-in-right">
                <img src="/home2-banner11.png" alt="" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="bg-stone-200 transition-all duration-300 hover:shadow-[0_0_8px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer row-span-2" data-aos="zoom-in">
                <img src="/home2-banner13.png" alt="" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="bg-stone-200 transition-all duration-300 hover:shadow-[0_0_8px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer" div data-aos="zoom-in-left">
                <img src="/home2-banner12.png" alt="" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="bg-stone-200 transition-all duration-300 hover:shadow-[0_0_8px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer" div data-aos="zoom-in-down">
                <img src="/home2-banner14.png" alt="" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="bg-stone-200 transition-all duration-300 hover:shadow-[0_0_8px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer" data-aos="zoom-in-right">
                <img src="/home2-banner15.png" alt="" className="h-full w-full object-cover object-center"/>
            </div>
        </div>
    )
}