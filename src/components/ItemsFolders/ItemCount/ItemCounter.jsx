import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const ItemCounter = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter col-12 mx-md-auto">
      <div className="m-auto p-0">
        <button
          className="col-2 btn btn-danger btnCount"
          disabled={count <= 1}
          onClick={decrease}
        >
          <BsIcons.BsPersonDashFill className="remove-traveler fs-5" />
        </button>

        <span className="btn btn-text btnCount col-8">
          {count} {count !== 1 ? "PASSENGERS" : "PASSENGER"}
        </span>
        <button
          className="col-2 btn btn-dark btnCount"
          disabled={count >= 4}
          onClick={increase}
        >
          <BsIcons.BsPersonPlusFill className="add-traveler fs-5" />
        </button>
      </div>
      <div className="p-0 mt-2 text-center m-auto">
        <Link to="/pre-checkout">
          <button
            className="add-traveler btn btn-primary text-uppercase col-12"
            disabled={stock <= 0}
            onClick={() => onAdd(count)}
          >
            Book now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCounter;
