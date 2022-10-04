import React, {useState, useEffect, useContext} from "react";
import ItemList from "../ItemList/ItemList";
import { cruises } from "../ItemFetch/Origin";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function ItemListContainer (props) {
    const [items, setItems] = useState([]);
    // const [setItems] = useState([]);
    const values = useContext(useCartContext);
    
    // Ejemplo con destructuring
    // const {valor1, valor3, valor5} = useContext(useCartContext);
    console.log(values);

    const {categoryId} = useParams()

    useEffect( () => {
        const setItems = new Promise (resolve => {
            setTimeout( () => {
                resolve(cruises);
            }, 1000);
        });
        if (categoryId) {
            setItems.then(res => setItems (res.filter(cruises => cruises.category === categoryId)));
        } else {
            setItems.then(res => setItems (res));
        }
    }, [categoryId, setItems])

    return (
        <>
            <div className="container-xxl">
                <h1 className="text-center mt-5">Our Cruises</h1>
                <ItemList items={items}/>
            </div>
        </>
    )
}
export default ItemListContainer;

export function getItemById (id) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(cruises.find(prod => prod.id === id))
        }, 500)
    })
}