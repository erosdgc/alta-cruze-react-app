import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import './EmptyCart.css'

const EmptyCart = () => {
  return (
    <div className="container-fluid background-gradient">
      <img
        className="bg-img position-fixed empty-cart-img"
        src="https://res.cloudinary.com/drulocuwt/image/upload/v1669927162/atlas-cruzer-react-app/various/empty-card_vvevyk.jpg"
        alt="Clouds in the sky"
      />
      <div className="container text-sm-center">
        <div className="col-10 col-lg-10 col-xl-8 mx-auto card rounded-0 border-0 shadow px-4 px-sm-5 py-4 py-sm-5 empty-cart-card">
          <h2 className="display-4">Your order seems to be empty.</h2>
          <h3 className="display-5 mt-4">
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
            You could also see our{" "}
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
