import { createContext, useState } from "react"

export const HoverContext = createContext();

export const HoverHeader = ({children}) => {
    const [home, setHome] = useState(false);
    const [category, setCategory] = useState(false);
    const [product, setProduct] = useState(false);
    const [pages, setPage] = useState(false);
    const [feature, setFeature] = useState(false);

    const isHome = () => {
        setHome(true);
        setCategory(false);
        setProduct(false);
        setPage(false);
        setFeature(false);
    }
    const isCategory = () => {
        setCategory(true);
        setHome(false);
        setProduct(false);
        setPage(false);
        setFeature(false);
    }
    const isProduct = () => {
        setProduct(true);
        setCategory(false);
        setHome(false);
        setPage(false);
        setFeature(false);
    }
    const isPages = () => {
        setPage(true);
        setProduct(false);
        setCategory(false);
        setHome(false);
        setFeature(false);
    }
    const isFeature = () => {
        setFeature(true);
        setPage(false);
        setProduct(false);
        setCategory(false);
        setHome(false);
    }
    window.onclick = () => {
        setFeature(false);
        setPage(false);
        setProduct(false);
        setCategory(false);
        setHome(false);
    }
    return(
        <HoverContext.Provider value={{home, category, product, pages, feature, isHome, isCategory, isProduct, isPages, isFeature}}>
            {children}
        </HoverContext.Provider>
    )
}