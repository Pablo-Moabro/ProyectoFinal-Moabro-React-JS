import "./ItemCount.css"
import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
    
    let [count, setCount] = useState(initial)
    const handleIncrease = () => count < stock ? setCount(count + 1) : null;
    const handleDecrease = () => count > 1 ? setCount(count - 1) : null;
    
    
    return(
        
        <div className="itemcount--container">
            <div className="itemcount">
                <button onClick={handleDecrease} className="itemcount--decrease">-</button>
                <span className="itemcount--num">{count}</span>
                <button onClick={handleIncrease} className="itemcount--increase">+</button>
            </div>
                <button onClick={() =>stock > 0 ? onAdd(count) : null} className="itemcount--add" type="submit">Agregar al Carrito</button>
        </div>
    )
};

export default ItemCount