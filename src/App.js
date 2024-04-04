import React, { useState } from "react";
import "./App.css";
import AvailableItems from "./components/Items/AvailableItems";
import Header from "./components/Layout/Header";
import Cart from "./components/cart/cart";
import { CartProvider } from "./components/store/cartContext";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutPage from "./components/pages/About";
import HomePage from "./components/pages/Home";
import Footer from "./components/Layout/Footer";
import ContactUs from "./components/pages/ContactUs";
import ProductDetails from "./components/productDetails/ProductDetails";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);

  return (
    <CartProvider>
      <Router>
        <Cart show={showCart} onClose={handleClose} />
        <Header show={handleShow} />
        <Routes> 
          <Route path="/" exact element={<AvailableItems />} />
          <Route path="/store" element={<AvailableItems />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
