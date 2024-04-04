import { useState } from "react";
import "./App.css";
import AvailableItems from "./components/Items/AvailableItems";
import Header from "./components/Layout/Header";
import Cart from "./components/cart/cart";
import { CartProvider } from "./components/store/cartContext";
import {
  Route,
  BrowserRouter as RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AboutPage from "./components/pages/About";
import HomePage from "./components/pages/Home";
import Footer from "./components/Layout/Footer";
import ContactUs from "./components/pages/ContactUs";

const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/store", element: <AvailableItems />},
  { path: "/contactus", element: <ContactUs />}
]);

let App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);
  return (
    <CartProvider>
      <RouterProvider router={router}>
        <Cart show={showCart} onClose={handleClose} />
        <Header show={handleShow} />
        <Routes>
          <Route path="/store" element={<AvailableItems />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </RouterProvider>
    </CartProvider>
  );
};

export default App;
