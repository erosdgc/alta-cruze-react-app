import './App.css';
import { Routes, Route } from 'react-router-dom';
// import 'core-js/actual';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import CartWidget from './components/CartWidget/CartWidget';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

export default function App () {

  return (
    <>
      <div className='sticky-top w-100 z-index-999 top-0'>
        <NavBar />
      </div>
      <CartProvider>
        <Routes> 
            <Route path='/' element={<Main/>}/>
            <Route path='/cruises' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            {/* <Route path='/check-in' element={<CartWidget/>}/> */}
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart />}></Route>
            {/* <Route path='/destinations' element={<Destinations/>}/>
            <Route path='/antilles' element={<Antilles/>}/>
            <Route path='/black-sea' element={<Black-Sea/>}/>
            <Route path='/caribbean' element={<Caribbean/>}/>
            <Route path='/central-pacific' element={<Central-Pacific/>}/> */}
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

