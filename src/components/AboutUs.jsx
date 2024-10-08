import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AboutUs = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);
    return (
        <div className="w-full relative h-auto mt-48 sm:mt-32 flex flex-col items-center bg-red-500 text-white">
            <div className="relative flex items-center justify-center -mt-52 sm:-mt-20 md:-mt-32 w-6/12 sm:w-10/12 md:w-8/12 shadow-[0_0_8px_rgba(0,0,0,0.5)] before:absolute before:content-[''] before:size-24 sm:before:size-20 before:rounded-full before:bg-white before:cursor-pointer after:absolute after:content-[''] after:size-6 after:ml-2 after:bg-red-500" div data-aos="flip-down">
                <img src="/home2-bg-video.png" alt="" className="" />
            </div>
            <p className="text-4xl sm:text-2xl mt-10 sm:mt-8 sm:px-7 font-bold uppercase" data-aos="fade-up-left">WELLCOME TO DEKORA FURNITURE</p>
            <p className="w-6/12 sm:w-11/12 md:w-8/12 text-center py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua Ut enim ad minim veniam quis.</p>
            <div className="mt-10 md:mt-0 sm:mt-0 px-20 sm:px-7 md:px-10 pb-5 sm:py-4 flex sm:flex-col sm:gap-y-6 md:gap-x-5 items-center justify-center">
                <div className="flex md:flex-col md:gap-y-5 items-start sm:items-center gap-x-3" data-aos="zoom-in-right">
                    <img src="/home2-logo-about-us.png" alt="" />
                    <div className="">
                        <p className="text-xl font-semibold hover:underline hover:decoration-2 cursor-pointer">ABOUT US</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="flex md:flex-col md:gap-y-5  items-start sm:items-center gap-x-3" data-aos="zoom-in-left">
                    <img src="/home2-icon-pencil.png" alt="" />
                    <div className="">
                        <p className="text-xl font-semibold hover:underline hover:decoration-2 cursor-pointer">HOW WE WORK?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="flex md:flex-col md:gap-y-5  items-start sm:items-center gap-x-3" data-aos="zoom-in-right">
                    <img src="/home2-icon-security.png" alt="" />
                    <div className="">
                        <p className="text-xl font-semibold hover:underline hover:decoration-2 cursor-pointer">PAYMENT & SECURITY</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}