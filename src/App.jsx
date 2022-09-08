import './App.css';
import 'core-js/actual';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from './components/Items/ItemListContainer';

function App() {

  return (
    <div>
      <div className='position-fixed w-100 z-index-999'>
      <NavBar />
      </div>
      <div className='container-fluid'>
      <Main />
      <ItemListContainer />
      <Footer />
      </div>
    </div>
  );
}

export default App;
