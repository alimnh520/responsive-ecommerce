import { useEffect, useRef, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export const MessageUs = () => {
    const [isChecked, setCheckVal] = useState(false);
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    const policy = useRef();
    return (
        <div className="h-48 sm:h-auto sm:py-5 w-full flex sm:flex-col items-center justify-center px-20 sm:px-5 bg-stone-200 mt-28 sm:mt-10 md:mt-10" data-aos="zoom-out">
            <div className="w-36 h-0.5 bg-stone-500 mx-3 sm:my-4"></div>
            <div className="text-3xl sm:text-xl sm:py-2 font-bold uppercase sm:text-center">
                Subscribe Newsletter
            </div>
            <div method="POST" action="/subscribe" className="ml-10 sm:m-0 flex gap-y-2 sm:py-3 flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <input type="text" placeholder="your email address" className="h-14 sm:h-12 w-60 px-4 sm:w-10/12 placeholder:font-normal sm:placeholder:text-sm placeholder:italic placeholder:capitalize rounded-tl-full outline-none rounded-bl-full text-lg font-medium" />
                    <button className={`h-14 sm:h-12 w-32 sm:w-24 ${isChecked ? "bg-red-600" : "bg-red-400 pointer-events-none"}  rounded-tr-full rounded-br-full sm:text-base text-xl font-semibold sm:font-medium text-white`} type="submit">Subscribe</button>
                </div>
                <div className="flex items-center justify-center">
                    <input type="checkbox" id={policy} className="mb-0.5 mx-2 size-4" onChange={(e) => setCheckVal(e.target.checked)}/>
                    <label htmlFor={policy}>
                        I agree to the terms and conditions and the privacy policy
                    </label>
                </div>
            </div>
        </div>
    )
}