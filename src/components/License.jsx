import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const License = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    return (
        <div className="h-60 w-full sm:my-1 flex sm:grid sm:place-items-center md:grid md:grid-cols-2  sm:grid-cols-2 sm:grid-rows-2 md:place-items-center md:pb-5 items-center justify-center">
            <img src="1.jpg" alt="" className="cursor-pointer transition-opacity duration-300 object-center img" data-aos="fade-right"/> 
            <img src="2.jpg" alt="" className="cursor-pointer transition-opacity duration-300 object-center img" data-aos="fade-right"/> 
            <img src="3.jpg" alt="" className="cursor-pointer transition-opacity duration-300 object-center img" data-aos="fade-left"/> 
            <img src="4.jpg" alt="" className="cursor-pointer transition-opacity duration-300 object-center img" data-aos="fade-left"/>
        </div>
    )
}