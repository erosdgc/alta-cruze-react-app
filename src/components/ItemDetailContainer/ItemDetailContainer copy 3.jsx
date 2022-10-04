import React, { useState, useEffect } from "react";
// import { getData } from "../ItemFetch/customFetch";
import { cruises } from "../ItemFetch/Origin";
import { useParams } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

    useEffect( () => {
      const getCruise = () =>
        new Promise(( res, rej) => {
          const cruise = cruises.find((prod) => prod.id === Number(id));
          setTimeout( () => {
            res(cruise);
          }, 1000);
        });

    getCruise()
    .then((info) => {
      setItem(info);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);

  return (
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;

