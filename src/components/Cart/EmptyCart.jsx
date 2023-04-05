import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import './EmptyCart.css'

const EmptyCart = () => {
  return (
    <div className="container-fluid background-gradient h-full">
      <img
        className="bg-img position-fixed empty-cart-img"
        src="https://res.cloudinary.com/drulocuwt/image/upload/v1669927162/atlas-cruzer-react-app/various/empty-card_vvevyk.jpg"
        alt="Clouds in the sky"
      />
      <div className="card-container w-100 px-3 px-lg-0 text-center mt-fill content-over-img d-flex justify-content-center">
        <div className="empty-cart-card card rounded-0 bg-tr border-0 shadow px-4 px-sm-5 py-5">
          <h2 className="display-4">No cruises selected.</h2>
          <h3 className="display-4 mt-4">
            Would you like to{" "}
            <Link className="text-decoration-none home" to="/">
              return home
            </Link>
            ?
          </h3>
          <p className="text-muted mt-4 mb-2">
            If you can't find what you're looking for, maybe you could{" "}
            <Link to="/contact" className="text-decoration-none">
              send us a message
            </Link>{" "}
            in order to help you.
          </p>
          <p className="text-muted">
            You could also take a look at our{" "}
            <Link to="/contact/faqs" className="text-decoration-none">
              FAQs
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
