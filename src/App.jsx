import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <CartProvider>
        <ScrollToTop />
        <div className="sticky-top w-100 z-index-999 top-0">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cruises" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}
