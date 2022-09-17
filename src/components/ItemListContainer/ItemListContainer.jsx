import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import cruises from "../ItemFetch/Origin";

function ItemListContainer () {
    const [data, setData] = useState([]);
    // const [setData] = useState([]);

    useEffect( () => {
        const getData = new Promise (resolve => {
            setTimeout( () => {
                resolve(cruises);
            }, 500);
        });
        getData.then(res => setData (res));
    }, [data])
// Cuando dejo el espacio en blanco entre los corchetes de la 16, me marca como que está mal, pero sí funciona correctamente. Queda más prolijo trayendo 'data' nuevamente.

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