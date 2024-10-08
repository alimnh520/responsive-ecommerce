import { FaHeart } from "react-icons/fa6";
export const CopyRight = () => {
    return(
        <div className="w-full h-16 sm:h-10 bg-white sm:text-sm">
            <p className="h-full flex items-center justify-center"><span className="font-bold mx-2">NAHID</span> © 2020 Made with <FaHeart className="text-red-500 mx-2 sm:hidden"/> All Rights Reserved.</p>
        </div>
    )
}