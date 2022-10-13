import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {
    const { totalUnities } = useContext(CartContext);
    const unities = totalUnities();

    return (
        <Link>
            <li className="nav-item cart list-unstyled">
                <i className="nav-link link-icon fa-solid fa-user"></i>
                <div className="position-absolute">{unities}</div>
            </li>
        </Link>
    )
}

export default CartWidget;