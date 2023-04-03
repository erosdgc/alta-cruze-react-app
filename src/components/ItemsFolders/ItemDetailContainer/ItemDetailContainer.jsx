import { collection, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "cruises");
    const ref = doc(prodCollection, id);
    getDoc(ref).then((res) => {
      setItem({
        id: res.id,
        ...res.data(),
      });
    });
  }, [id]);

  return (
    <div>
      {item.id ? (
        <ItemDetail item={item} />
      ) : (
        <div className="row background-gradient background-fvh align-middle">
          <div className="m-auto z-above align-middle mx-auto">
            <div
              className="spinner-border text-primary d-flex mx-auto"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="display-6 mt-3 text-center">Loading...</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
