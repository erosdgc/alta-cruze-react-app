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
        <div className="counter row">
            <div className="m-auto">
                <button disabled={ count <= 0 } onClick={decrease} className="btn btn-dark border-0 rounded-0 btnCount col-2">-</button>
                <span className="btn btn-light rounded-0 btnCount col-8">{count} Passenger/s</span>
                <button disabled={ count >= stock } onClick={increase} className="btn btn-dark border-0 rounded-0 btnCount col-2">+</button>
            </div>
            <div className="mt-2 text-center row m-auto">
                <button className="p-2 rounded-0 btn btn-success" disabled={ stock <= 0 } onClick={ () => onAdd (count) }>BOOK NOW</button>
            </div>
        </div>
    )
}

export default ItemCount;