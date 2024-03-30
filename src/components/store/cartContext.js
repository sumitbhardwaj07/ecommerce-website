import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.title === product.title
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
