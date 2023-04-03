import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="container px-4 px-sm-0 mb-5">
      <article
        className=" col-12 col-md-10 col-lg-12 mx-auto mb-5 shadow-lg"
        key={item.id}
        id="category"
      >
        <div id={item.ids} className="row justify-content-md-center">
          <div className="card-image col-12 col-lg-8 p-0 m-0">
            <Link to={`/detail/${item.id}`}>
              <img
                className="item-img p-0"
                src={item.image}
                alt={item.alt}
              />
            </Link>
          </div>
          <div className="mx-auto card card-info border-0 rounded-0 card-item px-3 py-2 py-lg-2 py-xl-3 p-xxl-4 col-12 col-lg-4">
            <Link className="text-decoration-none w-fit" to={`/detail/${item.id}`}>
              <h2 className="card-name roboto-font display-4 text-dark">
                {item.title}
              </h2>
            </Link>
            <h4 className="departure roboto-font mt-1 mb-0 mb-xl-2 initialism">
              From {item.departure}
            </h4>
            <p className="roboto-font initialism mt-3 mt-xl-4">
              {item.duration} nights
            </p>
            <p className="roboto-font initialism mb-0 mt-xl-3">Next departure date</p>
            <p className="roboto-font initialism mb-4">{item.date}</p>
            <p className="roboto-font initialism mb-0 mt-xl-3">Price per traveler</p>
            <h4 className="roboto-font card-price">${item.price}</h4>
            <div className="card-btn-buy mt-auto" data-id={item.id}>
              <Link to={`/detail/${item.id}`}>
                <button className="btn btn-primary text-uppercase col-12 mb-3 mb-sm-0 mt-4 mt-sm-3">
                  Learn more
                </button>
              </Link>
            </div>
            <p className="initialism text-center mb-0 text-muted mt-sm-3">
              Service fee included.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Item;