import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer =() =>{
    
    const {id} = useParams();
    
    return(
        
        <main className="item__list__container">
        <ItemList category={id} />
        </main>
        
    );
};

export default ItemListContainer;