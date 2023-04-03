import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
// import DialogOne from "./DialogOne";
import MinorsQuestion from "./MinorsQuestion";

const Cart = (cruise) => {
  const { cart, deleteOne, deleteAll, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  const [showDialogOne, setShowDialogOne] = useState(false);

  useEffect(() => {
    if (showDialogOne) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [showDialogOne]);

  if (cart.length === 0) {
    return (
      <div className="container-fluid py-5 form-gradient">
        <div className="container mt-fill text-sm-center">
          <div className="col-10 col-lg-10 col-xl-8 mx-auto card rounded-0 border-0 shadow px-4 px-sm-5 py-4 py-sm-5">
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
  } else {
    return (
      <>
        <div className="container-fluid background-gradient cart-container">
          {cart.map((cruise) => (
            <img
              key={cruise.id}
              className="bg-img position-fixed cart-image"
              src={cruise.image3}
              alt={cruise.alt3}
            />
          ))}
          <div className="px-1 px-sm-0 cart-card-container w-100">
            <div className="modal-dialog cart-dialog pb-5 px-2 px-md-0">
              <div className="cart-content shadow-hover px-3 px-md-4 py-4 p-lg-5 bg-tr bg-blur col-12 col-sm-10 col-md-8 mx-auto">
                <div className="mb-4 text-justify">
                  <h2 className="display-3 mt-1">Good choice!</h2>
                  <p className="text-mute mt-3">
                    To continue, please check the details below. If you want to
                    change the destination or amount of travelers on your next
                    cruise, you can return to the previous section.
                  </p>
                </div>
                {cart.map((cruise) => (
                  <div key={cruise.id}>
                    <div className="bg-tr-full card inner-card mx-auto col-12 col-md-10 col-xxl-8 shadow-sm rounded-0 p-0 me-auto px-0 px-md-2 mb-5">
                      <div className="modal-header border-0 px-4 px-lg-5 me-0 mt-3">
                        <h2 className="modal-title display-4">
                          {cruise.title}
                        </h2>
                        <div>
                          <button
                            className="px-3 py-3 btn x-btn btn-danger rounded-0 hover-shadow text-light border-0 remove-cruise"
                            onClick={() => setShowDialogOne(true)}
                          >
                            <i className="fa-solid fa-x"></i>
                          </button>
                        </div>
                      </div>
                      <form className="px-4 px-lg-5 me-0 px-sm-4 pb-4 mb-3 position-relative">
                        <p className="text-muted">
                          {cruise.date} – {cruise.arrival}
                        </p>
                        <h3 className="display-6 fs-3 inter-font mt-3 travelers">
                          {cruise.quantity}
                          <span>
                            {" "}
                            {cruise.quantity !== 1 ? "travelers" : "traveler"}
                          </span>
                        </h3>
                        <div className="mt-3 mt-md-4">
                          <MinorsQuestion />
                        </div>
                        <p className="display-6 mt-4 price">
                          Price per traveler: <span>${cruise.price}.-</span>
                        </p>
                        <p className="display-6 mt-3 subtotal">
                          Subtotal:{" "}
                          <span>${cruise.price * cruise.quantity}.-</span>
                        </p>
                        <p className="disclaimer text-muted text-justify mt-4 mb-0">
                          All prices are listed in USD. Prices and availability
                          are subject to change without notice. While we strive
                          for accuracy, mistakes happen. In the event of an
                          incorrect price on a quote or order, you will be
                          notified by email or phone, and given the option to
                          accept the corrected price or cancel the reservation
                          at least 30 days prior to established departure date.
                        </p>
                      </form>
                    </div>
                  </div>
                ))}
                <div className="py-4">
                  <div className="border-bottom col-10 col-md-10 col-xxl-6 mx-auto border-dark text-center">
                    <h2 className="display-6 roboto-font total">
                      Total:
                      <span className="display-6 roboto-font"> ${total}.-</span>
                    </h2>
                  </div>
                  <div className="col-12 d-flex flex-column flex-md-row-reverse justify-content-center mt-4 gap-4 px-3 px-md-4">
                    <Link
                      className="btn btn-primary mx-auto mx-lg-0 col-12 col-sm-10 col-md-5 col-lg-5 col-xl-4 col-xxl-3 checkout"
                      to="/checkout"
                    >
                      CONTINUE
                    </Link>
                    <button
                      className="btn btn-danger mx-auto mx-lg-0 col-12 col-sm-10 col-md-5 col-lg-5 col-xl-4 col-xxl-3"
                      onClick={deleteAll}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showDialogOne ? (
          <div className="container-fluid dialog-container d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center rounded-0 overflow-hidden bg-light shadow-lg p-5">
              <p className="lead fs-3">Are you sure to delete this cruise?</p>
              <div className="mt-3 gap-2 col-12">
                <button
                  className="btn btn-primary col-6"
                  onClick={() => {
                    deleteOne(cruise.id);
                    setShowDialogOne(false);
                  }}
                >
                  YES
                </button>
                <button
                  className="btn btn-danger col-6"
                  onClick={() => setShowDialogOne(false)}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
};

export default Cart;
