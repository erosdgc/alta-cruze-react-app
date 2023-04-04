import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import SubscribeModal from "./SubscribeModal";
// import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setModalMessage("Please enter your email to subscribe.");
    } else {
      setModalMessage(
        "You have successfully subscribed to our newsletter!"
      );
    }
    setShowModal(true);
  };

  return (
    <>
      <Form
        className="subscribe-form d-flex flex-column flex-sm-row w-100 gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="subscribe-input form-control rounded-0"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="subscribe-button btn btn-warning rounded-0 text-uppercase"
        >
          Subscribe
        </button>
      </Form>
      {showModal && (
        <SubscribeModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalMessage={modalMessage}
        />
      )}
    </>
  );
};

export default Subscribe;
