// import './ItemDetail.css';
import React, {useState} from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCounter";
import { Link } from "react-router-dom";

export function ItemDetail (cruises) {

    const [addToCart, setAddToCart] = useState(false);

    function onAdd (quantity) {
        setAddToCart(true);
    }

    // function onAdd (quantity) {
    //     if (quantity >= 5) {
    //         alert("Do you need to book for more than 4 passengers? Please send us an e-mail to bookings@atlascruzer.com")
    //     }
    //     else if (quantity === 1) {
    //         alert(`You have booked for ${quantity} passenger to travel.`); 
    //     }
    //     else {
    //         alert(`You have booked for ${quantity} passenger(s) to travel.`);
    //     }
    // }

    return (
        <div className="container-xxl">
            <article className="card rounded-0 border-0 shadow p-3 mt-5 row">
                <h1 className="text-center roboto-font mt-3">{cruises.cruise}</h1>
                <h3 className="text-center roboto-font">From {cruises.departure}</h3>
                <p className="col-8 text-justify m-auto mt-3 roboto-font">{cruises.description}</p>
                <img className="col-8 m-auto mt-3" src={cruises.image} alt={cruises.alt} />
                <div className="col-3 m-auto mt-5 mb-4">
                    {
                        addToCart ? <Link to='/cart'>End Booking</Link>
                        : <ItemCount initial={2} stock={5} onAdd={onAdd} />
                    }
                </div>
            </article>
        </div>
    )
};