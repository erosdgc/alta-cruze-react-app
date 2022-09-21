import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import cruises from "../ItemFetch/Origin";
import { useParams } from "react-router-dom";

function ItemListContainer () {
    const [data, setData] = useState([]);
    // const [setData] = useState([]);

    const {categoryId} = useParams()

    useEffect( () => {
        const getData = new Promise (resolve => {
            setTimeout( () => {
                resolve(cruises);
            }, 1000);
        });
        if (categoryId) {
            getData.then(res => setData (res.filter(cruises => cruises.category === categoryId)));
        } else {
            getData.then(res => setData (res));
        }
    }, [categoryId])

    return (
        <>
            <div className="container-xxl">
                <h1 className="text-center mt-5">Our Cruises</h1>
                <ItemList data={cruises} />
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