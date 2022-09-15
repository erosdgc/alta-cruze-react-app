import './App.css';
import { Routes, Route } from 'react-router-dom';
// import 'core-js/actual';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from './components/Items/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import CartWidget from './components/NavBar/CartWidget';

function App() {

  return (
    <>
      <div className='sticky-top w-100 z-index-999 top-0'>
        <NavBar />
      </div>
      <Routes> 
          <Route path='/home' element={<Main/>}/>
          <Route path='/cruises' element={<ItemListContainer/>}/>
          <Route path='/category' element={<ItemListContainer/>}/>
          <Route path='/check-in' element={<CartWidget/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
