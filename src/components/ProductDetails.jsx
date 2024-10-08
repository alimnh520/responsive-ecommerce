import ItemDetails from '../json/ItemsDetails.json'
import ProductCard from './ProductCard'

export const ProductDetails = ({newProduct, bestSell, custom}) => {

    return (
        <div className="h-auto w-full py-3 px-16 md:px-20 sm:px-2 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-2">
            {
                ItemDetails.map((currElm) => {
                    if (custom) {
                        return <ProductCard currElm={currElm} key={currElm.id}/>
                    }

                    if (newProduct && currElm.rating == 0) {
                        return <ProductCard currElm={currElm} key={currElm.id}/>
                    }
                    if (bestSell && currElm.rating > 0) {
                        return <ProductCard currElm={currElm} key={currElm.id}/>
                    }
                })
            }
        </div>
    )
}