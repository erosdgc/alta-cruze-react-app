import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="container">
      <article
        className="card rounded-0 border-0 shadow p-xxl-3 col-lg-12 col-md-10 col-sm-12 col-11 mx-auto  mt-5"
        key={item.id}
      >
        <div className="row justify-content-md-center">
          <div className="card-image col-xxl-6 col-lg-8 col-12 p-sm-0 p-xs-0 px-xl-0 px-xxl-3">
            <Link to={`/detail/${item.id}`}>
              <img
                className="img-fluid izo item-card-img"
                src={item.image}
                alt={item.alt}
              />
            </Link>
          </div>
          <div className="mx-auto card card-info border-0 rounded-0 card-item p-3 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Link className="text-decoration-none" to={`/detail/${item.id}`}>
              <h2 className="card-name roboto-font display-6 text-dark">
                {item.title}
              </h2>
            </Link>
            <h4 className="departure roboto-font mt-1 mb-0 initialism">
              From {item.departure}
            </h4>
            <p className="roboto-font initialism mt-4">
              {item.duration} nights
            </p>
            <p className="roboto-font initialism mb-0">Next departure date</p>
            <p className="roboto-font initialism mb-4">{item.date}</p>
            <p className="roboto-font initialism mb-0">Price per traveler</p>
            <h4 className="roboto-font card-price">${item.price}</h4>
            <div className="card-btn-buy mt-auto" data-id={item.id}>
              <Link to={`/detail/${item.id}`}>
                <button className="p-2 rounded-0 btn btn-success text-uppercase w-100 mb-3 mb-sm-0 mt-4 mt-sm-3">
                  Learn more
                </button>
              </Link>
            </div>
            <p className="initialism text-center mb-0 text-muted mt-sm-3 mt-auto">
              Service fee included.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Item;