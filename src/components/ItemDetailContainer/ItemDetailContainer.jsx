import React, { useState, useEffect } from "react";
import { getItemById } from "../ItemFetch/customFetch";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer () {
    const [itemDetail, setToDoDetail] = useState({})

  const {id} = useParams() 

    useEffect(()=> {
        getItemById(parseInt(id)).then(response => {
            setToDoDetail(response)
        })
    }, [id])
  return (
    <div className='container-fluid'>
        <ItemDetail {...itemDetail}/>
    </div>
  )
}

