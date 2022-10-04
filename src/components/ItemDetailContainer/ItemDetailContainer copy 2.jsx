import React, { useState, useEffect } from "react";
// import { getData } from "../ItemFetch/customFetch";
import { cruises } from "../ItemFetch/Origin";
import { useParams } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  
  // const products = Object.keys(cruises).map((key) => cruises[key]);

  const [item, setItem] = useState([]);

  // const values = useContext(useCartContext);
  // console.log(values);

  const {id} = useParams();

    // useEffect(()=> {
    //     getData(parseInt(id)).then(response => {
    //         setData(response)
    //     })
    // }, [id])

    useEffect( () => {
        const getData = () => new Promise(( res, rej) => {
          const cruise = cruises.find((prod) => prod.id === Number(id));
          setTimeout( () => {
            res(cruise);
          }, 1000);
        });

    getData()
    .then((info) => {
      setItem(info);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);

  return (
    // data.map (cruise => <ItemDetail key={cruise.id} info={cruise} itemDetail={itemDetail} />
   <ItemDetail item={item} />
  //  <ItemDetail data={cruises} />
  //  <ItemDetail key={cruise.id} item={cruise} />
  );
}

export default ItemDetailContainer;

