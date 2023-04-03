import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Subscribe from "../Newsletter/Subscribe";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="container-fluid h-full">
      <div className="img-gradient-main">
        <img
          src="https://res.cloudinary.com/drulocuwt/image/upload/v1666711559/atlas-cruzer-react-app/heroes/something_l0sp6y.jpg"
          className="hero-img img-content position-fixed"
          alt="A cruise ship anchored on the water"
        />
        <div className="carousel-caption d-block d-md-flex flex-md-column">
          <h5 className="display-3 text-uppercase">
            Something awesome is coming
          </h5>
          <p className="lead fs-3 inter-font mt-3 mt-sm-3">
            It's going to be amazing. Sign up to find out when it's ready!
          </p>
          <div className="mt-3 d col-12 col-md-10 col-lg-8 col-xxl-6 mx-auto gap-2">
            <Subscribe />
          </div>

          {/* <div className="mt-3 d-flex flex-column flex-sm-row col-12 col-md-8 col-xl-6 mx-auto gap-2">
            <label htmlFor="newsletter2" className="visually-hidden col-12 col-sm-8 col-lg-7 col-xl-8 col-xxl-9">
              Email address
            </label>
            <input
              id="newsletter2"
              type="text"
              className="form-control rounded-0"
              placeholder="Email address"
            />
            <button
              className="btn btn-warning rounded-0 col-12 col-sm-4 col-lg-5 col-xl-4 col-xxl-3 mt-2 mt-sm-0 mx-auto"
              type="button"
            >
              SUBSCRIBE
            </button>
          </div> */}
          <div className="d-flex flex-column align-items-center justify-content-center pb-md-0 py-4 mt-lg-2">
            {/* <h3 className="lead inter-font fs-3">Follow us:</h3> */}
            <ul className="list-unstyled d-flex footer-brands fs-3 gap-4 mt-5 mt-md-0">
              <li className="ms-3">
                <a className="link-light" href="https://www.facebook.com/">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-light"
                  href="https://www.linkedin.com/in/erosdavidgomezcentofanti/"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="https://github.com/erosdgc">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
