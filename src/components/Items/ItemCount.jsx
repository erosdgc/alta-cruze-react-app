import React, { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <button disabled={ count <= 0 } onClick={decrease} className="btn btn-primary rounded-0 btnCount px-3">-</button>
            <span className="btn btn-light rounded-0 btnCount px-3">{count} Passenger/s</span>
            <button disabled={ count >= stock } onClick={increase} className="btn btn-primary rounded-0 btnCount px-3">+</button>
            <div>
                <button className="btn btn-success" disabled={ stock <= 0 } onClick={ () => onAdd (count) }>Book Now</button>
            </div>
        </div>
    )
}

export default ItemCount;