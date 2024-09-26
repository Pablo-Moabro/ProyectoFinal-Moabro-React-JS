import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetails.css"
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";


const ItemDetails = ({ id, title, img, price, dues, stock  }) => {

    const { addItem } = useContext(CartContext);
    
    
    const handleAdd = (quantity) =>{
            addItem({id, title, img, price, quantity, dues, stock})
           
    }


    return(
        <section className="item-details">
            <picture className="item-details__picture">
                <img className="item-details__picture--img" src={img} alt="" />
            </picture>
            <article className="item-details__info">
                <h2 className="item-details__info--title">{title}</h2>
                <h5 className="item-details__info--id">ID:{id}</h5>
                <h2 className="item-details__info--price">Precio ${price}</h2>
                <p className="item-details__info--dues">{dues} Cuotas sin interés</p>
                <p className="item-details__info--stock">Stock: {stock}</p>
                <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
                
           
            
            </article>
        </section>
    );
};

export default ItemDetails;