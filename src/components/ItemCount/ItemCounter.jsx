import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCounter = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter row mx-md-auto">
            <div className="m-auto p-0">
                <button disabled={ count <= 1 } onClick={decrease} className="btn btn-dark rounded-0 btnCount col-2">-</button>
                <span className="btn btn-light rounded-0 border-0 btnCount col-8">{count} passenger(s)</span>
                <button disabled={ count >= 4 } onClick={increase} className="btn btn-dark rounded-0 btnCount col-2">+</button>
            </div>
            <div className="p-0 mt-2 text-center m-auto">
                <Link to='/cart' className="">
                    <button className="rounded-0 btn btn-success text-uppercase col-12" disabled={ stock <= 0 } onClick={ () => onAdd (count) }>Add cruise</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemCounter;