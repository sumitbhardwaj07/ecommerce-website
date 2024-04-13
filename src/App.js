import React, { useContext, useState, lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Cart from "./components/cart/cart";
import { CartProvider } from "./components/store/cartContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthContext from "./components/store/authContext";

// Lazy-loaded components
const AuthForm = lazy(() => import("./components/auth/authForm"));
const AvailableItems = lazy(() => import("./components/Items/AvailableItems"));
const AboutPage = lazy(() => import("./components/pages/About"));
const HomePage = lazy(() => import("./components/pages/Home"));
const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const ProductDetails = lazy(() =>
  import("./components/productDetails/ProductDetails")
);

const App = () => {
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);

  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Cart show={showCart} onClose={handleClose} />
          <Header show={handleShow} />
          <Routes>
            {!authCtx.isLoggedIn && (
              <Route path="/" exact element={<AuthForm />} />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/" exact element={<AvailableItems />} />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/store" element={<AvailableItems />} />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/about" element={<AboutPage />} />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/home" element={<HomePage />} />
            )}
            {authCtx.isLoggedIn && <Route path="/contactus" element={<ContactUs />} />}
            <Route path="/login" element={<AuthForm />} />
            {authCtx.isLoggedIn && (
              <Route path="/product/:productId" element={<ProductDetails />} />
            )}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
