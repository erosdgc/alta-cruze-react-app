import React from "react";
// Bootstrap Icons https://react-icons.github.io/react-icons/icons?name=bs
import * as BsIcons from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import ItemListContainer from "../ItemsFolders/ItemListContainer/ItemListContainer";
import "./Main.css";

const Main = () => {
  return (
    <div className="container-fluid">
      <div
        id="heroes"
        className="carousel slide carousel-fade hero"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item img-gradient-main active">
            <img
              src="https://res.cloudinary.com/drulocuwt/image/upload/v1666297973/atlas-cruzer-react-app/categories/classics_jqx2hz.jpg"
              className="hero-img img-content"
              alt="An old town port in Dubrovnik, Croatia"
            />
            <div className="h-100 carousel-caption d-block d-md-flex flex-md-column">
              <h5 className="display-1 quicksand">DISCOVER NOW</h5>
              <p className="display-5 inter-font mt-2 mt-sm-3">
                The ΛTLΛS CRUZER Experience
              </p>
              <div className="d-flex flex-column justify-content-between">
                <Link
                  to="/experience"
                  className="btn rounded-0 roboto-font py-2 col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 col-xxl-3 btn-light mt-2 mt-sm-4 mx-auto"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient-main">
            <img
              src="https://res.cloudinary.com/drulocuwt/image/upload/v1666259050/atlas-cruzer-react-app/heroes/second_ewjnqq.jpg"
              className="hero-img img-content"
              alt="Two women sitting on a pier"
            />
            <div className="carousel-caption d-block">
              <h5 className="display-1 quicksand">MEET & ENJOY</h5>
              <p className="display-5 inter-font mt-2 mt-sm-3">
                Our unique land program options
              </p>
              <div className="d-flex flex-column justify-content-between">
                <Link
                  to="/experience/ashore"
                  className="btn rounded-0 roboto-font py-2 col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 col-xxl-3 btn-light mt-2 mt-sm-4 mx-auto"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient-main">
            <img
              src="https://res.cloudinary.com/drulocuwt/image/upload/v1666259222/atlas-cruzer-react-app/heroes/third_cwkywe.jpg"
              className="hero-img img-content"
              alt="A cruise ship on the ocean under a sunset"
            />
            <div className="carousel-caption d-block">
              <h5 className="display-1 quicksand">SAIL BEYOND</h5>
              <p className="display-5 inter-font mt-2 mt-sm-3">
                With ΛTLΛS CRUZER Transoceanic
              </p>
              <div className="d-flex flex-column justify-content-between">
                <Link
                  to="/experience/onboard"
                  className="btn btn-light rounded-0 roboto-font py-2 col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 col-xxl-3 mt-2 mt-sm-4 mx-auto"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item img-gradient-main">
            <img
              src="https://res.cloudinary.com/drulocuwt/image/upload/v1666284034/atlas-cruzer-react-app/heroes/fourth_hset15.jpg"
              className="hero-img img-content"
              alt="Waves breaking on a beach from above"
            />
            <div className="carousel-caption d-block">
              <h5 className="display-1 quicksand">TRAVEL DEEPER</h5>
              <p className="display-5 inter-font mt-2 mt-sm-3">
                Through lesser-known waters and hidden corners
              </p>
              <div className="d-flex flex-column justify-content-between">
                <Link
                  to="/experience"
                  className="btn rounded-0 roboto-font py-2 col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 col-xxl-3 btn-light mt-2 mt-sm-4 mx-auto"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroes"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroes"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <Link className="carousel-chevron-down" type="button" to="#main">
          <BsIcons.BsChevronDown
            className="carousel-chevron-down-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Down</span>
        </Link>
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Main;
