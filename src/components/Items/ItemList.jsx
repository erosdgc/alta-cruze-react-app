import Item from "./Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map
        (cruise => 
            <Item key={cruise.id} info={cruise} />)
    );
}

export default ItemList;