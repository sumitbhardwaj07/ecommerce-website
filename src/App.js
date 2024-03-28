import { useState } from "react";
import "./App.css";
import AvailableItems from "./components/Items/AvailableItems";

import Header from "./components/Layout/Header";
import Cart from "./components/cart/cart";

let App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);
  return (
    <>
      <Cart show={showCart} onClose={handleClose} />
      <Header show={handleShow} />
      <AvailableItems />
    </>
  );
};

export default App;
