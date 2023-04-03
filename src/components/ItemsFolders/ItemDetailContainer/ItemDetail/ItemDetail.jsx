import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import ItemCounter from "../../ItemCount/ItemCounter";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";
import "./ItemDetail.css";
import { HashLink as Link } from "react-router-hash-link";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    addToCart(item, quantity);
  };

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.key === 27;
    }
    if (isEscape) {
      setPreDetails(true);
    }
  };

  const [preDetails, setPreDetails] = useState(true);
  useEffect(() => {
    if (preDetails) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [preDetails]);

  return (
    <div className="container-fluid detail-container img-gradient-main">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner position-fixed">
          <div className="carousel-item active">
            <img src={item.image} className="d-block bg-img" alt={item.alt} />
          </div>
          <div className="carousel-item">
            <img src={item.image3} className="d-block bg-img" alt={item.alt3} />
          </div>
          <div className="carousel-item">
            <img src={item.image2} className="d-block bg-img" alt={item.alt2} />
          </div>
        </div>
      </div>
      {preDetails ? (
        <div className="carousel-caption mt-5 mt-md-4 text-center d-flex flex-column align-items-center" key={item.id}>
          <h2 className="display-1 quicksand fw-normal">{item.title}</h2>
          <p className="display-6 inter-font mt-2 mt-sm-3">
            {item.date} – {item.arrival}
          </p>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-light roboto-font py-2 col-12 col-lg-3 mt-2 mt-sm-4 text-uppercase"
            data-bs-toggle="modal"
            data-bs-target="#details"
            onClick={() => setPreDetails(false)}
          >
            Details
          </button>
        </div>
      ) : null}
      <div
        className="modal modal-xl fade px-1 px-md-0 bg-blur"
        data-bs-backdrop="false"
        id="details"
        tabIndex="-1"
        aria-labelledby="Details"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0 border-0 bg-tr bg-blur py-3 px-4 py-sm-4 px-sm-5 w-100">
            <div className="modal-header border-0 mb-0 p-0">
              <h1 className="modal-title display-3" id="exampleModalLabel">
                {item.title}
              </h1>
              <button
                type="button"
                className="px-3 btn x-btn btn-danger rounded-0 hover-shadow text-light border-0"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setPreDetails(true)}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <div className="modal-body mt-0 p-0">
              <article id="bookNow" className="">
                <h4 className="departure roboto-font mb-0 initialism">
                  From {item.departure}
                </h4>
                <p className="roboto-font initialism mt-4 mb-4">
                  <span className="detail-icon fs-6 me-1">
                    <MdIcons.MdNightsStay />
                  </span>
                  {item.duration} nights
                </p>
                <p className="roboto-font initialism mb-1">
                  <span className="detail-icon fs-6 me-1">
                    <GoIcons.GoCalendar />{" "}
                  </span>
                  Next departure date:
                </p>
                <p className="date roboto-font initialism mb-4">
                  {item.date} – {item.arrival}
                </p>
                <p className="roboto-font fs-6 fs-md-5 inter-font mb-4 description">
                  {item.description}
                </p>
                <p className="roboto-font initialism mb-0">
                  Price per traveler
                </p>
                <h4 className="roboto-font card-price mb-4">${item.price}</h4>
                <div className="card-btn-buy mt-auto" data-id={item.id}>
                  {quantity === 0 ? (
                    <ItemCounter initial={1} onAdd={onAdd} />
                  ) : (
                    <Link
                      className="p-2 rounded-0 btn btn-success w-100 shadow-sm text-uppercase"
                      to="/pre-checkout"
                      data-bs-dismiss="modal"
                      data-bs-backdrop="false"
                      data-backdrop="false"
                    >
                      Book now
                    </Link>
                  )}
                </div>
                <p className="question-2 mx-auto mt-3 mb-0 text-center text-muted col-12 col-md-10 col-xl-12">
                  Do you need to book this cruise for more than 4 passengers?
                  Please contact us to bookings@atlascruzer.com
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="/"
                    className="text-decoration-none text-center mt-3 lead home"
                  >
                    Click here to go back home
                  </Link>
                </div>
                <p className="initialism text-center mt-4 mb-0 text-muted mt-sm-3">
                  Service fee included
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
