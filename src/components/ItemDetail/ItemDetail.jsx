import React, {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCount/ItemCounter";
import './ItemDetail.css';

const ItemDetail = ( { item } ) => {

    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        addToCart(item, quantity);
    };

    return (
        <div className="container-fluid">
            <article className="rounded-0 border-0 p-xxl-3 mt-5" key={item.id}>
                <div className="row">
                    <div className="card border-0 rounded-0 card-item shadow-sm p-3 col-xxl-6 col-xl-6 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <h2 className="card-name roboto-font display-2">{item.title}</h2>
                        <h4 className="departure roboto-font mb-0 initialism">From {item.departure}</h4>
                        <p className="roboto-font initialism mt-3">{item.duration} nights</p>
                        <p className="roboto-font initialism mb-0">Next departure date:</p>
                        <p className="date roboto-font initialism mb-3">{item.date}</p>
                        <img className="img-fluid mb-4" src={item.image} alt={item.alt} />
                        {/* <Link to={`/detail/${item.id}`}><img className="img-fluid mb-4" src={item.image} alt={item.alt} /></Link> */}
                        <p className="roboto-font text-justify lead mb-4 description">{item.description}</p>
                        <p className="roboto-font initialism mb-0">Price per traveler</p>
                        <h4 className="roboto-font card-price mb-4">${item.price}</h4>
                        <div className="card-btn-buy mt-auto" data-id={item.id}>
                        {quantity === 0 ? (
                        <ItemCounter stock={4} initial={1} onAdd={onAdd} />
                        ) : (
                            <Link className='p-2 rounded-0 btn btn-success w-100 shadow-sm' to="/cart">PROCEED TO BOOKING SECTION</Link>
                        )}
                        </div>
                        <p className="initialism text-center mt-4 mb-0 text-muted mt-sm-3 mt-auto">Service fee included.</p>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default ItemDetail;