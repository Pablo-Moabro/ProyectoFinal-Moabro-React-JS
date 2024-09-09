import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

const Details = () => {
    const { id } = useParams();
    let [item, setItem] = useState(null)
    useEffect( () => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => setItem(data.find(item => item.id == id)))
    }, [])
    
    return(
        <ItemDetails {...item} />
    );
};

export default Details;
    