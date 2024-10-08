import { useEffect, useState } from "react"
import { ProductDetails } from "./ProductDetails"
import AOS from 'aos'
import 'aos/dist/aos.css'

export const ProductPage = () => {
    const [newProduct, setNewProduct] = useState(false);
    const [bestSell, setBestSells] = useState(false);
    const [custom, setCustom] = useState(true);
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

    const isBestSell = () => {
        setBestSells(true);
        setNewProduct(false);
        setCustom(false);
    }
    const isNewProduct = () => {
        setNewProduct(true);
        setBestSells(false);
        setCustom(false)
    }
    const isCustom = () => {
        setCustom(!custom);
        setNewProduct(false);
        setBestSells(false);
    }

    const linkCls = "relative bg-white px-2 py-1 before:absolute before:opacity-0 hover:before:opacity-100 before:content-[''] before:size-3 before:border-2 before:border-black before:transition-all before:duration-300 before:-left-0.5 before:-top-0.5 before:-z-10 after:absolute after:opacity-0 hover:after:opacity-100 after:content-[''] after:size-3 after:border-2 after:border-black after:transition-opacity after:duration-300 after:-bottom-0.5 after:-right-0.5 after:-z-10 cursor-pointer text-lg sm:text-sm sm:text-center font-semibold sm:m-0"
    return (
        <div className="h-auto w-full flex flex-col items-center">
            <p className="text-3xl sm:text-2xl font-bold sm:px-5" data-aos="fade-down-right">FEATURE PRODUCTS CREATE BY DEKORA</p>
            <p className="w-3/6 sm:w-11/12 text-center py-7 sm:py-4" data-aos="fade-up-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis.</p>

            <div className="w-full flex flex-col items-center justify-center">
                <nav className="flex items-center justify-center">
                    <ul className=" uppercase sm:px-5 flex gap-x-5 items-center justify-center">
                        <li className={`${linkCls} ${newProduct && "after:opacity-100 before:opacity-100"}`} onClick={isNewProduct}>New Products</li>
                        <li className={`${linkCls} ${bestSell && "after:opacity-100 before:opacity-100"}`} onClick={isBestSell}>Best Sellers</li>
                        <li className={`${linkCls} ${custom && "after:opacity-100 before:opacity-100"}`} onClick={isCustom}>Custom Products</li>
                    </ul>
                </nav>
                <ProductDetails newProduct={newProduct} bestSell={bestSell} custom={custom}/>
            </div>
        </div>
    )
}