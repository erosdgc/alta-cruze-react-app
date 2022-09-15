import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import cruises from "../../Fetch/Origin";

const ItemListContainer = () => {

    const [data, setData] = useState([]);

// Promesa
    useEffect( () => {
        const getData = new Promise (resolve => {
            setTimeout( () => {
                resolve(cruises);
            }, 500);
        });
        getData.then(res => setData (res));
    }, [])

    return (
        <>
            <div className="container-xxl">
                <h1 className="text-center mt-5">Our Cruises</h1>
                <ItemList data={data} />
            </div>
        </>
    )
}

export default ItemListContainer;


export const getToDoById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(cruises.find(prod => prod.id === id))
        }, 500)
    })
}