import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/ItemsFolders/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemsFolders/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import OnBoard from "./components/Experience/OnBoard";
import Ashore from "./components/Experience/Ashore";
import Footer from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { NavProvider } from "./context/NavContext";

function App() {
  return (
    <>
      <NavProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="fixed-top w-100 z-index-999 top-0 p-0">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/pre-checkout" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/on-board" element={<OnBoard />} />
            <Route path="/experience/ashore" element={<Ashore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </CartProvider>
      </NavProvider>
    </>
  );
}

export default App;
