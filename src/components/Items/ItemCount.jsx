import React from "react";

const ItemCount = (props) => {
    const [count, setCount] = React.useState(0);
    function counter (type){
        if(!type && count > 0) {
            setCount(count - 1);
        }
        else if(type && count < props.stock) {
            setCount(count + 1);
        }
    }
    return (
        <div className="">
            <button className="btn btn-light rounded-0 btnCount px-3" onClick={()=> counter(true)}>0</button>
            {/* <button className="btn px-3 btn-secondary rounded-0 btnCount w-50" onClick={()=> counter (false)}></button> */}
        </div>
    )
}

export default ItemCount;