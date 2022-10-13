import { collection, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

    useEffect( () => {
      const prodCollection = collection (db, 'cruises');
      const ref = doc(prodCollection, id);
      getDoc(ref).then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
      });
    }, [id]);

  return (
    <ItemDetail item={item} />
  );
};

export default ItemDetailContainer;

