import React, { createContext } from 'react'

const CartContext = createContext();
const SaveCart = ({children}) => {
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export default SaveCart
