import React from "react";
import hero from "../assets/images/hero.jpg";
import ItemListContainer from "./Items/ItemListContainer";

const Main = () => {
    return (
        <div className="hero">
            <img src={hero} alt="Cruise ship anchored on the sea near some coast" />
            <ItemListContainer/>
        </div>
    )
}

export default Main;