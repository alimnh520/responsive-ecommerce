import { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaWindows, FaHeart } from "react-icons/fa";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { GoMail } from "react-icons/go";

export const LoginId = ({ user, setUser }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [hidePass, setHidePass] = useState(false);
    const [mailVal, setMailVal] = useState(null);
    const [passVal, setPassVal] = useState(null);
    const [flag, setFlag] = useState('US');
    const currencySymbol = {
        US: "$",
        BD: "৳",
        IN: "₹",
        PK: "Rs",
        SA: "﷼",
    }
    const [currency, setCurrency] = useState('US');
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        if (mailVal !== '') {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    };
    const handleFocusPass = () => {
        setIsFocusedPass(true);
    };
    const handleBlurPass = () => {
        if (passVal !== '') {
            setIsFocusedPass(true);
        } else {
            setIsFocusedPass(false);
        }
    };

    return (
        <div className={`h-screen ${user ? "block right-0 animate-opacity" : "hidden"} w-full absolute top-0 z-10 before:absolute before:h-full before:w-full before:content-[""] before:bg-gray-600 before:opacity-50`}>
            <div className={`absolute right-0 w-80 h-full bg-white` }>
                <RxCross1 className=" top-5 right-5 absolute text-3xl cursor-pointer sm:top-3 sm:right-3" onClick={() => setUser(!user)} />

                <form action="" className="mt-10 flex flex-col gap-y-8 px-4 pt-4 sm:mt-4 sm:gap-y-2">
                    <div className={`w-full h-10 z-10 relative flex items-center justify-center before:absolute before:h-0.5 before:transition-all before:duration-500 ${isFocused ? "before:w-full" : "before:w-0"} before:bg-red-500 before:bottom-0`}>
                        <input
                            type="email"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={`w-full h-full outline-none border-b-2 border-b-gray-200 `}
                            value={mailVal}
                            onChange={(e) => setMailVal(e.target.value)}
                        />
                        <label htmlFor="" className={`absolute left-0 top-1/2 ${isFocused ? 'top-0 text-red-500 text-sm' : 'top-1/2'} transition-all duration-300 -translate-y-1/2`}>Email <span className="text-red-500">*</span></label>
                    </div>
                    <div className={`w-full h-10 z-10 relative flex items-center justify-center before:absolute before:h-0.5 before:transition-all before:duration-500 ${isFocusedPass ? "before:w-full" : "before:w-0"} before:bg-red-500 before:bottom-0`}>
                        <input
                            type={`${hidePass ? "text" : "password"}`}
                            onFocus={handleFocusPass}
                            onBlur={handleBlurPass}
                            className={`w-full h-full outline-none border-b-2 border-b-gray-200 `}
                            value={passVal}
                            onChange={(e) => setPassVal(e.target.value)}
                        />
                        <label htmlFor="" className={`absolute left-0 top-1/2 ${isFocusedPass ? 'top-0 text-red-500 text-sm' : 'top-1/2'} transition-all duration-300 -translate-y-1/2`}>Password <span className="text-red-500">*</span></label>
                        <div className=" absolute flex items-center justify-center right-2 cursor-pointer text-xl " onClick={() => setHidePass(!hidePass)}>
                            {hidePass ? <FaRegEye className="animate-opacity" /> : <FaEyeSlash className="animate-opacity" />}
                        </div>
                    </div>
                    <button className="hover:bg-red-500 text-red-500 mt-2 transition-all duration-500 border-[1px] py-1 border-red-500 hover:text-white rounded-md">Sign In</button>
                    <a href="" className="w-full text-center text-gray-500 hover:text-red-500 transition-all my-2.5 sm:my-1">Forgot your password?</a>
                </form>
                <div className="flex items-center justify-center gap-x-1 uppercase text-sm bg-gray-200 py-3">
                    <p className="text-gray-500">No account?</p>
                    <a href="" className="text-red-500">Create one here</a>
                </div>
                <p className="w-full text-center py-3 font-light sm:py-2">Or sign in with:</p>
                <div className="flex items-center justify-center gap-x-1 text-4xl">
                    <FaFacebookSquare className="cursor-pointer text-blue-800" />
                    <FaGooglePlusSquare className="cursor-pointer text-orange-700" />
                    <FaInstagramSquare className="cursor-pointer text-red-500" />
                    <FaTwitterSquare className="cursor-pointer text-blue-500" />
                    <FaLinkedin className="cursor-pointer text-blue-800" />
                    <FaWindows className="cursor-pointer text-sky-500" />
                </div>
                <div className="flex flex-col gap-y-2 p-4">
                    <div className="flex items-center group gap-x-3 cursor-pointer">
                        <LiaBalanceScaleSolid className="text-xl mb-px" />
                        <p className="group-hover:text-red-500 text-sm">Compare (1 item)</p>
                    </div>
                    <div className="flex items-center group gap-x-3 cursor-pointer">
                        <FaHeart className="ml-0.5 mb-px" />
                        <p className="group-hover:text-red-500 text-sm">My wishlist</p>
                    </div>
                    <div className="flex items-center group gap-x-3 cursor-pointer">
                        <GoMail className="ml-0.5" />
                        <p className="group-hover:text-red-500 text-sm">Contact us</p>
                    </div>
                    <div className="flex w-fit pr-5 items-center border-b border-b-gray-300 group gap-x-3 cursor-pointer">
                        <img src={`https://flagsapi.com/${flag}/flat/64.png`} width='20px' />
                        <select name="" id="" className="ml-5 outline-none cursor-pointer" onChange={(e) => setFlag(e.target.value)}>
                            <option value="US">English</option>
                            <option value="BD">Bangla</option>
                            <option value="IN">Hindi</option>
                            <option value="PK">Urdu</option>
                            <option value="SA">Arabic</option>
                        </select>
                    </div>
                    <div className="flex w-fit pr-5 items-center border-b border-b-gray-300 group gap-x-3 cursor-pointer">
                        <p className="text-black font-semibold ml-1">{currencySymbol[currency]}</p>
                        <select name="" id="" className="ml-7 outline-none cursor-pointer" onChange={(e) => setCurrency(e.target.value)}>
                            <option value="US">English</option>
                            <option value="BD">Bangla</option>
                            <option value="IN">Hindi</option>
                            <option value="PK">Urdu</option>
                            <option value="SA">Arabic</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}