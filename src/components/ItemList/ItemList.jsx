import Item from "../Item/Item";
import React from "react";

const ItemList = ({ items }) => {
    return (
        <div className="container-fluid">
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    );
};

export default ItemList;