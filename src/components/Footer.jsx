import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    return (
        <div className="w-full h-96 sm:h-auto md:h-auto bg-gray-950 text-white gap-x-7 px-20 sm:px-10 md:px-10 py-16 sm:py-10 grid grid-cols-4 sm:flex md:flex sm:flex-col md:flex-col" data-aos="fade-up">
            <div className="flex flex-col justify-start gap-y-7">
                <p className="text-3xl font-bold uppercase">Dekora</p>
                <p className="font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dore magna aliqua.</p>
                <div className="text-2xl flex gap-x-5 items-center text-gray-950 justify-start">
                    <div className="size-8 bg-gray-100 text-base hover:text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
                        <FaFacebookF />
                    </div>
                    <div className="size-8 bg-gray-100 text-base hover:text-white hover:bg-blue-500 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
                        <FaTwitter />
                    </div>
                    <div className="size-8 bg-gray-100 text-base hover:text-white hover:bg-orange-500 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
                        <FaInstagram />
                    </div>
                    <div className="size-8 bg-gray-100 text-xl hover:text-white hover:bg-red-500 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
                        <TiSocialGooglePlus />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-start gap-y-7 mt-1.5 sm:mt-7 md:mt-6">
                <p className="font-bold uppercase text-xl">Quick Links</p>

                <p className="hover:text-gray-400 transition-colors duration-300 font-medium border-b pb-1 cursor-pointer">Cart</p>
                <p className="hover:text-gray-400 transition-colors duration-300 font-medium border-b pb-1 cursor-pointer">Cart</p>
                <p className="hover:text-gray-400 transition-colors duration-300 font-medium border-b pb-1 cursor-pointer">Cart</p>
                <p className="hover:text-gray-400 transition-colors duration-300 font-medium border-b pb-1 cursor-pointer">Cart</p>
            </div>
            <div className="flex flex-col justify-start gap-y-7 mt-1.5 sm:mt-8 md:mt-6">
                <p className="font-bold uppercase text-xl">Quick Links</p>
                <div className="flex items-center justify-between">
                    <img src="/footer1-blog1.jpg" alt="" />
                    <div className="mr-8 gap-y-1 flex flex-col items-start justify-center">
                        <p className="hover:text-gray-400 transition-colors duration-300 font-medium cursor-pointer">Title news potst 1</p>
                        <p className="text-sm">Sep, 07, 2017</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <img src="/footer1-blog2.jpg" alt="" />
                    <div className="mr-8 gap-y-1 flex flex-col items-start justify-center">
                        <p className="hover:text-gray-400 transition-colors duration-300 font-medium cursor-pointer">Title news potst 2</p>
                        <p className="text-sm">Sep, 07, 2017</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-y-7 mt-1.5 sm:mt-8 md:mt-6">
                <p className="font-bold uppercase text-xl">Instagram</p>
                <p className="bg-orange-200 px-4 py-3 text-center border border-orange-400 text-black text-sm">No instagram at this time.</p>
            </div>
        </div>
    )
}