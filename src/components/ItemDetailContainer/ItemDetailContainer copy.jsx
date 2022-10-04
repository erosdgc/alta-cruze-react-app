import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getData } from "../ItemFetch/customFetch";
import cruises from "../ItemFetch/Origin";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemDetailContainer = (props) => {
  
  const [itemDetail, setData] = useState({})

  const values = useContext(useCartContext);
  console.log(values);

  const {id} = useParams()

    // useEffect(()=> {
    //     getData(parseInt(id)).then(response => {
    //         setData(response)
    //     })
    // }, [id])

    useEffect( () => {
        const getData = new Promise(resolve => {
          setTimeout( () => {
            resolve(cruises);
          }, 1000);
        });
    getData.then(res => setData (res.find(item => item.id === parseInt(id))));
    }, [id, setData]);

  return (
    // data.map (cruise => <ItemDetail key={cruise.id} info={cruise} itemDetail={itemDetail} />
   <ItemDetail {...itemDetail} />
  //  <ItemDetail data={cruises} />
  //  <ItemDetail key={cruise.id} item={cruise} />
  );
}

export default ItemDetailContainer;

