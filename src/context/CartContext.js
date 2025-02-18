import React, { createContext, useState } from "react";

export const CartContext = createContext(); // Asegurar que el contexto está exportado correctamente

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);

    const addToCart = (item) => {
        setCarts((prevCarts) => {
            const itemExist = prevCarts.findIndex(cart => cart.id === item.id && cart.selectedSize === item.selectedSize);
            
            if (itemExist !== -1) {
                const updatedCarts = [...prevCarts];
                updatedCarts[itemExist].quantity += 1;
                return updatedCarts;
            }

            return [...prevCarts, { ...item, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ carts, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
