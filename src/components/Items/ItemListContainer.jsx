import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <div className="container-xxl">
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer;