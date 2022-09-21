import React, { useState, useEffect } from "react";
import { getData} from "../ItemFetch/customFetch";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
// import cruises from "../ItemFetch/Origin";

export function ItemDetailContainer () {
  
  const [itemDetail, setData] = useState({})

  const {id} = useParams() 

    useEffect(()=> {
        getData(parseInt(id)).then(response => {
            setData(response)
        })
    }, [id])

    // getData.then(res => setData (res.find(cruises.id === parseInt(id))));

  return (
    <div className='container-fluid'>
        <ItemDetail {...itemDetail}/>
    </div>
  )
}

