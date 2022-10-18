import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "cruises");
    const ref = categoryName
      ? query(prodCollection, where("category", "==", categoryName))
      : prodCollection;

    getDocs(ref).then((response) => {
      const cruises = response.docs.map((prod) => {
        console.log(prod);
        return {
          id: prod.id,
          ...prod.data(),
        };
      });
      setItems(cruises);
    });
  }, [categoryName]);

  return (
    <div className="container">
      { items.length ? (<ItemList items={items} />) : (
        <div className="text-center my-5">
          <div className="spinner-border text-primary align-middle" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="display-5 mt-3">Loading...</h4>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
