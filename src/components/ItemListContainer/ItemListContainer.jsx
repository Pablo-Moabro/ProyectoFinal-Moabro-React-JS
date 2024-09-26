import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs , query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import Spinner from "../Spinner/Spinner";




const ItemListContainer =() =>{
    
    const {id} = useParams();
    let [items, setItem] = useState([]);
    let [loading, setLoading] = useState(true);


    useEffect( () => {
        console.log("Category (id):", id)
        setLoading(true);
            const itemsCollection = id
            ? query(collection(db, 'Items'), where("category", "==", id))
            : collection(db, 'Items');
            console.log("Items collection query: ", itemsCollection);
            getDocs(itemsCollection)
            .then((snapshot) => {
                const retrievedItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                console.log("Retrieved items: ", retrievedItems);
                setItem(retrievedItems);
            })
            .catch((error) =>{
                console.log("Error al buscar items:", error)
            })
            .finally(() => setLoading(false))
            

    }, [id])
    
    
    
    
    
    
    return(
        
        <main className="item__list__container">
        <ItemList category={id} items={items} loading={loading} />
        </main>
        
    );
};

export default ItemListContainer;