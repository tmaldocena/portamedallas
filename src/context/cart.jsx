/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// 1. crear contexto
export const CartContext = createContext();


// 2. crear proveedor
export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const productInCart = cart.findIndex(item => item.id === product.id)

        if(productInCart >= 0){
            const newCart = structuredClone(cart);
            newCart[productInCart].quantity += 1;
            return setCart(newCart);
        }

        setCart( prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))

    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotal = () => {
        let suma = 0;
        cart.forEach((prod) => {
            suma += prod.valor * prod.quantity;
        })
        return suma;
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

