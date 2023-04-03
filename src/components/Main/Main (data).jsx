import React from "react";
import { HeroesData } from "./HeroesData";
// Bootstrap Icons https://react-icons.github.io/react-icons/icons?name=bs
import * as BsIcons from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
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
          {HeroesData.map((item, index) => {
            return (
              <div
                key={index}
                className="carousel-item img-gradient-main active"
              >
                <img
                  src={item.image}
                  className="hero-img img-content"
                  alt={item.alt}
                />
                <div className="h-100 carousel-caption d-block d-md-flex flex-md-column">
                  <h5 className="display-1 quicksand text-uppercase">
                    {item.title}
                  </h5>
                  <p className="display-5 inter-font mt-2 mt-sm-3">
                    {item.description}
                  </p>
                  <div className="d-flex flex-column justify-content-between">
                    <Link
                      to={item.path}
                      className="btn rounded-0 roboto-font py-2 col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 col-xxl-3 btn-light mt-2 mt-sm-4 mx-auto"
                    >
                      LEARN MORE
                    </Link>
                    <Link to="#goDown" className="text-reset chevron-down">
                      <BsIcons.BsChevronDown className="fs-1 transparent" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Main;
