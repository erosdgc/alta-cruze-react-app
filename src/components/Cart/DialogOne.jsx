import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./DialogOne.css";

const DialogOne = () => {
  const { cart, deleteOne, isInCart, cruise } = useContext(CartContext);

  const [showDialogOne, setShowDialogOne] = useState(false);

  useEffect(() => {
    if (showDialogOne) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [showDialogOne]);

  return (
    <>
      {/* <button
        className="px-3 py-3 btn x-btn btn-danger rounded-0 hover-shadow text-light border-0 remove-cruise"
        onClick={() => setShowDialogOne(true)}
      >
        <i className="fa-solid fa-x"></i>
      </button> */}

      {showDialogOne ? (
          <div
            key={cruise.id}
            className="container-fluid dialog-container d-flex flex-column justify-content-center align-items-center"
          >
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
};

export default DialogOne;
