import './App.css';
import { Routes, Route } from 'react-router-dom';
// import 'core-js/actual';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import CartWidget from './components/CartWidget/CartWidget';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

export default function App () {

  return (
    <>
      {/* <UserProvider> */}
        <CartProvider>
        <div className='sticky-top w-100 z-index-999 top-0'>
          <NavBar />
        </div>
          <Routes> 
              <Route path='/' element={<div className='position-sticky'><Main/></div>}/>
              <Route path='/cruises' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              {/* <Route path='/checkout' element={<CartWidget/>}/> */}
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />}/>
          </Routes>
          <Footer />
        </CartProvider>
      {/* </UserProvider> */}
    </>
  );
}

