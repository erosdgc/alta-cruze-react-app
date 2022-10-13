import React, {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemListContainer (props) {
    const [items, setItems] = useState([]);
    // const values = useContext(CartContext);
    
    const { categoryName } = useParams();


    useEffect(() => {
        const prodCollection = collection(db, 'cruises');
        const ref = categoryName
            ? query(prodCollection, where('category', '==', categoryName))
            : prodCollection;

    getDocs(ref).then((response) => {
        // data() método que nos provee firestore para transformar la información
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
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;

// export function getItemById (id) {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve(cruises.find(prod => prod.id === id))
//         }, 500)
//     })
// }