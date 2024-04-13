import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, userEmail) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.title === product.title && item.userEmail === userEmail
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1, userEmail }]);
    }
    fetch(`https://crudcrud.com/api/bd0541f66a6e41b095b04225fc6d7b79/cart/${userEmail}`,{
      method: 'POST',
      body: JSON.stringify({
        product,
        userEmail,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) =>{
      if (!response.ok){
        throw new Error("Failed to add item to cart!");
      }
    })
    .catch((error) =>{
      console.error('Error:', error);
    });
  };
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  const clearCart = () =>{
    setCartItems([]);
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
