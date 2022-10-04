import './ItemDetail.css';
import React, {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import ItemCounter from "../ItemCount/ItemCounter";
import { Link } from "react-router-dom";

const ItemDetail = ( { item } ) => {

    // const values = useContext(useCartContext);
    const [quantity, setQuantity] = useState(0);
    // const [goToCart, setGoToCart] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        // setGoToCart(true);
        setQuantity(quantity);
        addItem(item, quantity);
    };

    return (
        <div className="container-fluid">
            <article className="card rounded-0 border-0 shadow p-xxl-3 mt-5" key={item.id}>
                <div className="row">
                    <div className="card border-0 rounded-0 card-image col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 me-auto p-sm-0 mx-md-0">
                        <Link to={`/detail/${item.id}`}><img className="img-fluid izo p-0 px-xxl-3" src={item.image} alt={item.alt} /></Link>
                    </div>
                    <div className="card border-0 rounded-0 card-item shadow-sm p-3 col-xxl-6 col-xl-6 col-lg-4 col-md-12 col-sm-12 col-xs-12 mx-auto">
                        <Link className="text-decoration-none text-dark" to={`/detail/${item.id}`}><h2 className="card-name roboto-font display-4">{item.title}</h2></Link>
                        <h4 className="departure roboto-font mb-0 initialism">From {item.departure}</h4>
                        <p className="roboto-font initialism mt-3">{item.duration} nights</p>
                        <p className="roboto-font initialism mb-0">Next departure date</p>
                        <p className="roboto-font initialism mb-3">{item.date}</p>
                        <p className="roboto-font text-justify lead text-indent mb-4">{item.description}</p>
                        <p className="roboto-font initialism mb-0">Price per traveler</p>
                        <h4 className="roboto-font card-price mb-4">${item.price}</h4>
                        <div className="card-btn-buy mt-auto" data-id={item.id}>
                        {quantity === 0 ? (
                        <ItemCounter stock={10} initial={1} onAdd={onAdd} />
                        ) : (
                            <Link className='btn btn-success rounded-0 py-0 w-100 shadow-sm initialism' to="/cart">Booking section</Link>
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