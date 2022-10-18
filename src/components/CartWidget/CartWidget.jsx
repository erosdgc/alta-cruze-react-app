import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalUnities } = useContext(CartContext);
  const unities = totalUnities();

  if (unities === 0) {
    return (
    <div className="nav-item cart list-unstyled">
      <i className="nav-link link-icon fa-solid fa-user"></i>
    </div>
  )}

  else {
    return (
    <div className="nav-item cart list-unstyled">
      <i className="nav-link link-icon fa-solid fa-user"></i>
      <div className="position-absolute unities roboto-font">{unities}</div>
    </div>
  )}
};

export default CartWidget;