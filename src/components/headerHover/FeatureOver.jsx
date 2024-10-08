import { IoMdArrowDropright } from "react-icons/io";
export const FeatureOver = ({ scroll, feature }) => {
    return (
        <div className={`absolute transition-all duration-300 -left-16 ${scroll > 1 ? "top-[55px]":"top-[71px]"} top-20 h-12 w-60 ${feature ? "grid" : "hidden"} justify-items-center text-base font-normal items-center grid-cols-2 bg-white border-t shadow-xl sm:grid-cols-2 sm:grid-rows-none sm:w-52 sm:h-10 sm:left-20 sm:z-10 sm:top-0`}>
            <IoMdArrowDropright className="absolute text-5xl -rotate-90 -top-[30px] text-gray-300 sm:-left-7 sm:-top-3.5 sm:rotate-180"/>
            <p className="group border-none flex items-center justify-between w-20"><IoMdArrowDropright className=" group-hover:text-xl" /> Demo-1</p>
            <p className="group border-none flex items-center justify-between w-20"><IoMdArrowDropright className=" group-hover:text-xl" /> Demo-2</p>
        </div>
    )
}