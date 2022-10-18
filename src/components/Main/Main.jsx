import React from "react";
import hero from "../../assets/images/hero.jpg";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Main.css";

const Main = () => {
  return (
    <div className="hero container-fluid">
      <img
        className="img-fluid hero-img img-content"
        src={hero}
        alt="Cruise ship anchored on the sea near some coast"
      />
      <ItemListContainer />
    </div>
  );
};

export default Main;
