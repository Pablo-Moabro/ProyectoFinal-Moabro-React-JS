import "./Details.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import Spinner from "../../components/Spinner/Spinner";



const Details = () => {
    const { id } = useParams();
    let [item, setItem] = useState(null)
    let [loading, setLoading] = useState(true)
    
    
    
    useEffect( () => {

        setLoading(true);

        const itemDetails = doc(db, 'Items', id)
        getDoc(itemDetails)
        .then((snapshot) => {
            if(snapshot.exists()){
                setItem({id:snapshot.id, ...snapshot.data() })
            }
        })
        .catch((error) => {
            console.log('Error al buscar items', error)
        })
        .finally(() => setLoading(false))
        
    }, [])



    
    return(
        <>
        {loading ? <div className="spinner-container"><Spinner/></div> : <ItemDetails {...item} />}
        </>
    );
};

export default Details;
    