import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()

function CartProvider({children}) {
    const [carts, setCarts] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])


    useEffect(()=>{

        localStorage.setItem('cart', JSON.stringify(carts));
    }, [carts])

    return (
        <CartContext.Provider value={{carts, setCarts}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider
