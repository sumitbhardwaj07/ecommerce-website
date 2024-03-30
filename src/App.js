import { useState } from "react";
import "./App.css";
import AvailableItems from "./components/Items/AvailableItems";

import Header from "./components/Layout/Header";
import Cart from "./components/cart/cart";
import { CartProvider } from "./components/store/cartContext";

let App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);
  return (
    <CartProvider>
      <Cart show={showCart} onClose={handleClose} />
      <Header show={handleShow} />
      <AvailableItems />
    </CartProvider>
  );
};

export default App;
