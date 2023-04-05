import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-fluid background-gradient d-flex justify-content-center">
      <img
        className="bg-img position-fixed"
        src="https://res.cloudinary.com/drulocuwt/image/upload/v1666924055/atlas-cruzer-react-app/heroes/contact_actuyi.jpg"
        alt="A message in a bottle"
      />
      <div className="container mt-fill content-over-img d-flex justify-content-center">
        <form className="col-12 col-lg-8 col-xl-8 validate-form rounded-0 shadow card border-0 p-4">
          <h1 className="display-4 text-sm-center mb-3 mb-lg-4">
            Send Us a Message
          </h1>
          <label className="mt-1" htmlFor="firstName">
            First name:
          </label>
          <div
            className="validate-input mt-2"
            data-validate="Type first name"
          >
            <input
              id="first-name"
              className="form-control rounded-0"
              type="text"
              name="first-name"
              placeholder="First name"
              required
            />
            <span className=""></span>
          </div>
          <label className="mt-3" htmlFor="firstName">
            Last name:
          </label>
          <div
            className="validate-input mt-2"
            data-validate="Type last name"
          >
            <input
              className="form-control rounded-0"
              type="text"
              name="last-name"
              placeholder="Last name"
              required
            />
          </div>
          <label className="mt-3" htmlFor="email">
            Email Address:
          </label>
          <div
            className="validate-input  mt-2"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              id="email"
              className="form-control rounded-0"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <label className=" mt-3" htmlFor="phone">
            Phone number:
          </label>
          <div className="mt-2">
            <input
              id="phone"
              className="form-control rounded-0"
              type="number"
              name="phone"
              placeholder="Your phone number"
            />
          </div>
          <label className="mt-3" htmlFor="message">
            Message:
          </label>
          <div
            className="validate-input mt-2"
            data-validate="Message is required"
          >
            <textarea
              id="message"
              className="form-control rounded-0"
              name="message"
              placeholder="Write us a message"
              required
            ></textarea>
          </div>
          <div className="mt-4 col-12 d-flex">
            <button className="btn btn-primary col-6 col-md-4 rounded-0 mx-auto">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
