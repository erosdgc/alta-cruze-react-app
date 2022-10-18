import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCount/ItemCounter";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
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
          <div className="card border-0 rounded-0 card-item shadow-sm p-3 col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10 col-10 mx-auto">
            <h2 className="card-name roboto-font display-2">{item.title}</h2>
            <h4 className="departure roboto-font mb-0 initialism">
              From {item.departure}
            </h4>
            <p className="roboto-font initialism mt-3">
              {item.duration} nights
            </p>
            <p className="roboto-font initialism mb-0">Next departure date:</p>
            <p className="date roboto-font initialism mb-3">
              {item.date} – {item.arrival}
            </p>
            <img className="img-fluid mb-4" src={item.image} alt={item.alt} />
            <p className="roboto-font text-justify lead mb-4 description">
              {item.description}
            </p>
            <p className="roboto-font initialism mb-0">Price per traveler</p>
            <h4 className="roboto-font card-price mb-4">${item.price}</h4>
            <div className="card-btn-buy mt-auto" data-id={item.id}>
              {quantity === 0 ? (
                <ItemCounter initial={1} onAdd={onAdd} />
              ) : (
                <Link
                  className="p-2 rounded-0 btn btn-success w-100 shadow-sm text-uppercase"
                  to="/cart"
                >
                  Book now
                </Link>
              )}
            </div>
            <p className="mx-auto mt-3 mb-0 text-center text-muted col-12 col-md-10 col-xl-12">
              Do you need to book this cruise for more than 4 passengers? Please
              contact us to bookings@atlascruzer.com
            </p>
            <div className="d-flex justify-content-center">
              <Link
                to="/"
                className="text-decoration-none text-center mt-3 lead home"
              >
                Click here to go back home.
              </Link>
            </div>
            <p className="initialism text-center mt-4 mb-0 text-muted mt-sm-3 mt-auto">
              Service fee included.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
