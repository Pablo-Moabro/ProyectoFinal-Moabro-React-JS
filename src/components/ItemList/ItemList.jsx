import "./ItemList.css"
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

const ItemList = ( {items, loading} ) => {
    
    return(
        
        <section className={`items__container ${loading ? 'loading' : ''}`}>
            { loading 
            ? <Spinner/>
            :(
                <>
                {items.map((item, i) => <Item key={`item${i}`} {...item} tag="NUEVO"/>)}
                </>

            )
                
            }
        </section>
    );
};

export default ItemList