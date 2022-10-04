import Item from "../Item/Item";
import React from "react";

export default function ItemList ({data = []}) {
    return (
        data.map (cruise => <Item key={cruise.id} item={cruise} />)
    );
}
