import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import cruise1 from "../../assets/images/cards/south-america.jpg";
import cruise2 from "../../assets/images/cards/black-sea.jpg";
import cruise3 from "../../assets/images/cards/oceania.jpg";
import cruise4 from "../../assets/images/cards/southern-africa.jpg";
import cruise5 from "../../assets/images/cards/caribbean.jpg";
import cruise6 from "../../assets/images/cards/mediterranean-sea.jpg";
import cruise7 from "../../assets/images/cards/antartic.jpg";
import cruise8 from "../../assets/images/cards/central-pacific.jpg";

const cruises = [
    {id: 1, cruise: "South America", image: cruise1, alt: "A beach on South America, Brazil", departure: "Buenos Aires, Argentina", date: "December 3, 2022.", duration: 5, price: 600, stock: 4},
    {id: 2, cruise: "Black Sea", image: cruise2, alt: "A beach on the Black Sea, Sochi", departure: "Sochi, Russia", date: "July 3, 2022.", duration: 6, price: 700, stock: 4},
    {id: 3, cruise: "Oceania", image: cruise3, alt: "A beach on Oceania, Australia", departure: "Port Campbell, Australia", date: "December 24, 2022.", duration: 7, price: 850, stock: 4},
    {id: 4, cruise: "Southern Africa",image: cruise4, alt: "A beach on South Africa", departure: "Capetown, South Africa", date: "December 20, 2022.", duration: 9, price: 1050, stock: 4},
    {id: 5, cruise: "Caribbean", image: cruise5, alt: "A beach on the Caribbean, Mexico", departure: "Panama, Panama", date: "May 15, 2022.", duration: 9, price: 1100, stock: 4},
    {id: 6, cruise: "Mediterranean Sea", image: cruise6, alt: "A beach on the Mediterranean Sea, Italy", departure: "Porto Fino, Italy", date: "June 18, 2022.", duration: 10, price: 1200, stock: 4},
    {id: 7, cruise: "Antartic", image: cruise7, alt: "Antartic paradise, at the very south", departure: "Río Negro, Argentina", date: "January 31, 2022.", duration: 10, price: 1300, stock: 4},
    {id: 8, cruise: "Central Pacific", image: cruise8, alt: "A beach on the Pacific Ocean, Hawaii", departure: "Vancouver, Canada", date: "May 11, 2022.", duration: 12, price: 1500, stock: 4}
  ];

const ItemListContainer = () => {

    const [data, setData] = useState([]);

// Promesa
    useEffect( () => {
        const getData = new Promise (resolve => {
            setTimeout( () => {
                resolve(cruises);
            }, 1000);
        });
        getData.then(res => setData (res));
    }, [])


    return (
        <>
            <div className="container-xxl">
                <h1 className="text-center mt-5">Our Cruises</h1>
                <ItemList data={data} />
            </div>
        </>
    )
}

export default ItemListContainer;