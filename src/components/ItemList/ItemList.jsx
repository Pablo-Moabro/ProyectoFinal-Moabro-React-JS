import { useEffect, useState } from "react";
import "./ItemList.css"
import Item from "../Item/Item";

const ItemList = ( {category} ) => {
    let [items, setItem] = useState([]);
    console.log(category)

    useEffect( () => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => {
            if (category){
                setItem(data.filter(item => item.category.toLowerCase() === category.toLowerCase()))
            }else {
                setItem(data)
            }
        })
    }, [])
    
    
    return(
        <section className="items__container container">
        {items.map((item, i) => <Item key={`item${i}`} {...item} tag="NUEVO"/>)}
        </section>
    );
};

export default ItemList