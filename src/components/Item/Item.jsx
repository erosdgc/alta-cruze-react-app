import React, {useContext} from "react";
import ItemCounter from "../ItemCount/ItemCounter";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// import CartContext from "../../context/CartContext";

const Item = ({ item }) => {

    function onAdd (quantity) {
        if (quantity >= 5) {
            alert("Do you need to book for more than 4 passengers? Please send us an e-mail to bookings@atlascruzer.com")
        }
        else if (quantity === 1) {
            alert(`You have booked for ${quantity} passenger to travel.`); 
        }
        else {
            alert(`You have booked for ${quantity} passenger(s) to travel.`);
        }
    }

    const name = useContext(CartContext);
    console.log('Item: ', name);

    return (
        <div className="container">
            <article className="card rounded-0 border-0 shadow p-xxl-3 mt-5" key={item.id}>
                <div className="row justify-content-md-center">
                    <div className="card border-0 rounded-0 card-image col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 me-auto p-sm-0">
                        <Link to={`/detail/${item.id}`}><img className="img-fluid izo p-sm-0 p-xs-0 px-xl-0 px-xxl-3" src={item.image} alt={item.alt} /></Link>
                    </div>
                    <div className="mx-auto shadow-sm card border-0 rounded-0 card-item p-3 col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <Link className="text-decoration-none text-dark" to={`/detail/${item.id}`}><h2 className="card-name roboto-font">{item.title}</h2></Link>
                        <h4 className="departure roboto-font mb-0 initialism">From {item.departure}</h4>
                        <p className="roboto-font initialism mt-3">{item.duration} nights</p>
                        <p className="roboto-font initialism mb-0">Next departure date</p>
                        <p className="roboto-font initialism mb-3">{item.date}</p>
                        <p className="roboto-font initialism mb-0">Price per traveler</p>
                        <h4 className="roboto-font card-price">${item.price}</h4>
                        <div className="card-btn-buy mt-auto" data-id={item.id}>
                            <ItemCounter initial={1} stock={5} onAdd={onAdd} />
                        </div>
                        <p className="initialism text-center mt-4 mb-0 text-muted mt-sm-3 mt-auto">Service fee included.</p>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default Item;