// import './ItemDetail.css';
import React, {useState} from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCounter from "../ItemCount/ItemCounter";
import { Link } from "react-router-dom";

const ItemDetail = ( { item } ) => {

    // const values = useContext(useCartContext);
    const [quantity, setQuantity] = useState(0);
    // const [goToCart, setGoToCart] = useState(false);
    const {addItem} = useCartContext;

    const onAdd = (quantity) => {
        // setGoToCart(true);
        setQuantity(quantity);
        addItem(item, quantity);
    };

    return (
        <div className="container-xxl detail mb-5">
            <article className="card rounded-0 border-0 shadow p-3 mt-5">
                <div className="mx-auto">
                    <h1 className="text-center roboto-font mt-3">{item.cruise}</h1>
                    <h3 className="text-center roboto-font">From {item.departure}</h3>
                    <p className="col-8 text-justify m-auto mt-3 roboto-font">{item.description}</p>
                    <img className="col-8 m-auto mt-3" src={item.image} alt={item.alt} />
                    <h4 className="roboto-font card-price">${item.price}</h4>
                </div>
                <div className="col-3 m-auto mt-5 mb-4">
                    {quantity === 0 ? (
                    <ItemCounter stock={10} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
                </div>
            </article>
        </div>
    )
};

export default ItemDetail;