import {useState, useEffect} from "react";
import { getToDoById } from "../../Fetch/customFetch";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [ItemDetail, setData] = useState({});

    const {id} = useParams()

    useEffect( () => {
        getToDoById(id).then (response => {
            setData(response)
        });
    }, [id])

    return (
        // <ItemDetail data={data} /> 
        <ItemDetail {...ItemDetail} /> 
    )
}

