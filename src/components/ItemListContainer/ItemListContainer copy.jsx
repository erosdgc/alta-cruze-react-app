import React, {useState, useEffect, useContext} from "react";
import ItemList from "../ItemList/ItemList";
import { cruises } from "../ItemFetch/Origin";
// import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ItemListContainer (props) {
    const [items, setItems] = useState([]);
    const values = useContext(CartContext);
    
    

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                setTimeout(() => {
                    res(cruises);
                }, 500);
            });

        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <div className="container-xxl">
                <h1 onClick={values.salute} className="text-center display-3 mt-4">{values.title}</h1>
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