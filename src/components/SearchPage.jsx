import { RxCross1 } from "react-icons/rx";
import getItems from '../json/ItemsDetails.json'
import { useState } from "react";
import ProductCard from "./ProductCard";

export const SearchPage = ({ scroll, searchBar, setSearchBar }) => {
    const [inputVal, setInputVal] = useState('');
    
    return (
        <div className={`h-screen animate-opacity transition-all duration-300 text-white absolute left-0 ${scroll > 1 ? "top-[80px] md:top-36 sm:top-12" : "top-28 sm:top-16 md:top-44"} w-full ${searchBar ? "flex" : "hidden"} items-center justify-center before:absolute before:h-full before:w-full before:content-[''] before:bg-gray-600 before:opacity-50`}>

            <div className="h-full w-full py-10 px-20 sm:px-0 z-10 flex gap-y-5 flex-col items-center sm:mt-5">
                <RxCross1 className=" top-5 right-5 absolute text-3xl cursor-pointer" onClick={() => setSearchBar(!searchBar)} />

                <input type="text" className="px-10 py-2 text-lg font-medium w-4/12 sm:w-8/12 md:w-7/12 rounded-full outline-none text-black z-10 placeholder:font-light placeholder:text-base placeholder:italic" placeholder="Search item...." value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
                <div className="h-96 w-full backdrop-blur-xl sm:p-5 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-2 overflow-y-auto scrollBar rounded-md">
                    {
                        getItems.filter((items) => {
                            return(
                                inputVal.toLocaleLowerCase() === "" ? items : items.name.toLocaleLowerCase().includes(inputVal)
                            )
                        }).map((currElm) => {
                            return(
                                <ProductCard key={currElm.id} currElm={currElm} searchBar={searchBar}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}