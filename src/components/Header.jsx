import React, { useContext, useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { SearchPage } from './SearchPage';
import CartBar from './CartBar';
import { Link } from "react-scroll"
import { HoverHome } from './headerHover/HoverHome';
import { HoverContext } from './headerHover/Hover';
import { CategoryOver } from './headerHover/CategoryOver';
import { ProductOver } from './headerHover/ProductOver';
import { PageOver } from './headerHover/PageOver';
import { FeatureOver } from './headerHover/FeatureOver';
import { LoginId } from './LoginId';

const Header = () => {
    const [scroll, setScroll] = useState(0);
    const [navClick, setNavClick] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [cartBar, setCartBar] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [user, setUser] = useState(false);

    const {home, category, product, pages, feature, isHome, isCategory, isProduct, isPages, isFeature} = useContext(HoverContext);

    const handleScroll = () => {
        const sections = ['home', 'category', 'product', 'feature'];
        sections.forEach((section) => {
            const element = document.getElementById(section);

            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 6) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.scrollY / 50);
        }
    }, []);

    const linkCls = "relative uppercase bg-white px-2.5 py-0.5 before:absolute before:opacity-0 hover:before:opacity-100 before:content-[''] before:size-3 before:border-2 before:border-black before:transition-all before:duration-300 before:-left-0.5 before:-top-0.5 before:-z-10 after:absolute after:opacity-0 hover:after:opacity-100 after:content-[''] after:size-3 after:border-2 after:border-black after:transition-opacity after:duration-300 after:-bottom-0.5 after:-right-0.5 after:-z-10 cursor-pointer text-lg sm:text-base sm:text-center font-semibold sm:m-0"

    return (
        <div className={`w-full px-20 md:px-0 md:pb-2 sm:px-5 fixed z-10 transition-all duration-300 top-0 bg-white ${scroll > 1 ? "h-20 sm:h-12 md:h-36 position" : "h-28 sm:h-16 md:h-44"} flex md:flex-col md:gap-y-5 items-center justify-between border-b`}>

            <SearchPage scroll={scroll} searchBar={searchBar} setSearchBar={setSearchBar} />
            <CartBar cartBar={cartBar} setCartBar={setCartBar} />
            <LoginId user={user} setUser={setUser} />

            <p className="text-4xl sm:text-2xl flex items-center justify-center font-bold uppercase h-full md:h-fit md:w-full md:bg-gray-600 md:text-white ">Logo</p>

            <ul className={`relative flex items-center justify-center gap-x-10 ml-40 md:ml-0 sm:ml-0 animate-opacity  transition-all duration-300 ${scroll > 1 ? "sm:top-8" : "sm:top-14"} ${navClick ? "sm:flex" : "sm:hidden"} sm:absolute  sm:w-full sm:bg-white sm:flex-col sm:left-0 sm:items-start sm:px-4 sm:py-2 sm:gap-y-4 sm:mt-2 sm:border-b sm:border-b-gray-500 -z-20 `}>

                <li className={`${linkCls} ${activeSection === 'home' && 'before:opacity-100 after:opacity-100'}`} onMouseEnter={isHome}>
                    <Link to="home" duration={500}>
                        <span className={activeSection === 'home' ? 'active' : ''}>Home</span>
                        <HoverHome scroll={scroll} home={home}/>
                    </Link>
                </li>

                <li className={`${linkCls} flex items-center justify-center transition-all duration-500 ${activeSection === 'category' && 'before:opacity-100 after:opacity-100'}`} onMouseEnter={isCategory}>
                    <p className=' absolute flex items-center justify-center bg-red-500 text-white text-xs px-1 py-0.5 rounded-sm font-normal -top-5 before:absolute before:content-[""] before:size-2 before:rotate-45 before:bg-red-500 before:-bottom-1'>Hot</p>
                    <Link to="category" duration={500}>
                        <span className={activeSection === 'category' ? 'active' : ''}>Categories</span>
                    </Link>
                    <CategoryOver scroll={scroll} category={category}/>
                </li>

                <li className={`${linkCls} flex items-center justify-center ${activeSection === 'product' && 'before:opacity-100 after:opacity-100'}`} onMouseEnter={isProduct}>
                    <p className=' absolute flex items-center justify-center bg-sky-400 text-white text-xs px-1 py-0.5 rounded-sm font-normal -top-5 before:absolute before:content-[""] before:size-2 before:rotate-45 before:bg-sky-400 before:-bottom-1'>18+</p>
                    <Link to="product" duration={500}>
                        <span className={activeSection === 'product' ? 'active' : ''}>Products</span>
                    </Link>
                    <ProductOver scroll={scroll} product={product}/>
                </li>

                <li className={linkCls} onMouseEnter={isPages}>
                    pages
                    <PageOver scroll={scroll} pages={pages}/>
                </li>
                <li className={`${linkCls} ${activeSection === 'feature' && 'before:opacity-100 after:opacity-100'}`} onMouseEnter={isFeature}>
                    <Link to="feature" duration={500}>
                        <span className={activeSection === 'feature' ? 'active' : ''}>Feature</span>
                    </Link>
                    <FeatureOver scroll={scroll} feature={feature}/>
                </li>
            </ul>

            <div className="flex items-center justify-center gap-x-6 sm:gap-x-2 relative">

                <IoSearchSharp className='text-3xl sm:text-2xl cursor-pointer' onClick={() => setSearchBar(!searchBar)} />
                <div className=" relative flex items-center justify-center cursor-pointer" onClick={() => setCartBar(!cartBar)}>
                    <p className='rounded-xl absolute -top-4 sm:-top-3 right-0 text-white text-sm sm:text-xs bg-red-500 font-semibold px-1'>0</p>
                    <MdShoppingCart className='text-3xl sm:text-2xl' />
                </div>
                <FaUser className='text-xl sm:text-lg cursor-pointer' onClick={() => setUser(!user)}/>

                <div className="hidden ml-3 cursor-pointer sm:flex flex-col items-center justify-between size-6" onClick={() => setNavClick(!navClick)}>
                    <div className={`w-full transition-all duration-300 relative h-1 bg-black rounded-full ${navClick ? "rotate-45 top-2" : "rotate-0 top-0"}`}></div>

                    <div className={`transition-all duration-300 h-1 bg-black rounded-full ${navClick ? "w-0" : "w-full"}`}></div>

                    <div className={`w-full transition-all duration-300 relative h-1 bg-black rounded-full ${navClick ? "-rotate-45 bottom-3" : "rotate-0 top-0"}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Header
