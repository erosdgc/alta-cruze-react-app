import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteOne, deleteAll, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  if (cart.length === 0) {
    return (
      <div className="container text-center">
        <div className="col-10 col-lg-10 col-xl-8 mx-auto">
          <h2 className="display-3 mt-5">Your order seems to be empty.</h2>
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
            You could also see our{" "}
            <Link to="/contact/faqs" className="text-decoration-none">FAQs</Link>.
          </p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="container mt-4 mb-5">
        <h2 className="display-1 border-bottom mb-4 py-2 text-center">
          Good Choice!
        </h2>
        <div>
          {cart.map((cruise) => (
            <div
              key={cruise.id}
              className="card col-12 col-sm-10 col-lg-8 col-xl-6 cart-card border-0 rounded-0 p-0 mx-auto px-2 my-4"
            >
              <div className="px-4 me-0 px-sm-4 pb-4 mb-5">
                <div>
                  <button
                    className="px-3 ms-auto btn x-btn rounded-0 hover-shadow shadow-sm remove-cruise bg-danger text-light border-0"
                    onClick={() => deleteOne(cruise.id)}
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
                <h2 className="display-2 w-100 mt-3 position-relative">
                  {cruise.title}
                </h2>
                <p className="text-muted">
                  {cruise.date} – {cruise.arrival}
                </p>
                <h3 className="display-6 mt-3 travelers">
                  Travelers: <span>{cruise.quantity}</span>
                </h3>
                <div className="mt-4">
                  <blockquote className="blockquote">
                    Will you be traveling with minors under 18?
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Parents/guardians must ensure that the child does not roam
                    freely on the ship.
                  </figcaption>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="minorTraveler"
                    />
                    <label className="form-check-label" htmlFor="radioMinorTraveler">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="minorTravelerNegative"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="radioMinorTravelerNegative">
                      No
                    </label>
                  </div>
                </div>
                <p className="display-6 mt-3 price">
                  Price per traveler: <span>${cruise.price}.-</span>
                </p>
                <p className="display-6 mt-3 subtotal">
                  Subtotal: <span>${cruise.price * cruise.quantity}.-</span>
                </p>
                <p className="disclaimer text-muted notext-uppercase text-justify mt-4">
                  All prices are listed in USD. Prices and availability are
                  subject to change without notice. While we strive for
                  accuracy, mistakes happen. In the event of an incorrect price
                  on a quote or order, you will be notified by email or phone,
                  and given the option to accept the corrected price or cancel
                  the reservation at least 30 days prior to established
                  departure date.
                </p>
              </div>
            </div>
          ))}
          <div className="col-12 col-sm-10 col-lg-8 col-xl-6 cart-card border-0 rounded-0 mt-4 m-auto py-4">
            <h2 className="display-4 roboto-font text-center total">
              Total: <br />
              <span className="display-5 roboto-font">${total}.-</span>
            </h2>
            <div className="col-12 mx-auto">
              <Link
                className="btn btn-success rounded-0 hover-shadow shadow col-12 mt-4 checkout text-uppercase"
                to="/checkout"
              >
                Checkout
              </Link>
              <button
                className="btn btn-danger rounded-0 hover-shadow shadow col-12 mt-4 text-uppercase"
                onClick={deleteAll}
              >
                Cancel all
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;