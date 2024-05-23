/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// 1. crear contexto
export const CartContext = createContext();


// 2. crear proveedor
export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const productInCart = cart.findIndex(item => item.id === product.id)

        if(productInCart >= 0){
            const newCart = structuredClone(cart);
            newCart[productInCart].quantity += quantity;
            return setCart(newCart);
        }

        setCart( prevState => ([
            ...prevState,
            {
                ...product,
                quantity: quantity
            }
        ]))

    }

    const removeCart = product => {
        setCart( prevState => prevState.filter(item => item.id !== product.id))
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
            removeCart,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

