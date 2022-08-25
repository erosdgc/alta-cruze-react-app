import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Main from './components/Main';

function App() {
  console.log(Array.from(new Set([1, 2, 3, 3, 2])));

  const viajes = [
    {id: 1, cruise: "South America", image: "./src/assets/images/cards/south-america.jpg", departure: "Buenos Aires, Argentina", date: "", duration: 4, price: 500},
    {id: 2, cruise: "Black Sea", image: "./src/assets/images/cards/black-sea.jpg", departure: "Sochi, Russia", date: "", duration: 6, price: 700},
    {id: 3, cruise: "Oceania", image: "./src/assets/images/cards/.jpg", departure: "", date: "Port Campbell, Australia", duration: 7, price: 900},
    {id: 4, cruise: "Southern Africa", image: "./src/assets/images/cards/.jpg", departure: "Capetown, South Africa", date: "", duration: 9, price: 1000},
    {id: 5, cruise: "Caribbean", image: "./src/assets/images/cards/.jpg", departure: "Panama, Panama", date: "", duration: 9, price: 1100},
    {id: 6, cruise: "Mediterranean Sea", image: "./src/assets/images/cards/.jpg", departure: "Porto Fino, Italy", date: "", duration: "", price: 1200},
    {id: 7, cruise: "Antilles", image: "./src/assets/images/cards/.jpg", departure: "Cartagena, Colombia", date: "", duration: 10, price: 1200},
    {id: 8, cruise: "Central Pacific", image: "./src/assets/images/cards/.jpg", departure: "Vancouver, Canada", date: "", duration: 12, price: 1600}
  ];

  return (
    <div className="container-fluid">
      <Header className="sticky-top"/>
      <Main />
      <Footer />

      {
        viajes.map(item => (
          <li>{item.nombre} - ${item.price}</li>
        ))
      }
    </div>
  );
}

export default App;
