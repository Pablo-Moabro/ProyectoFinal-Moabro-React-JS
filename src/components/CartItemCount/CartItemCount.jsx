import "./CartItemCount.css"
import { useState } from "react"

const CartItemCount = ({ initialQuantity, stock, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrease = () => {
        if (quantity < stock) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="cart-item-count">
            <button type="button" onClick={handleDecrease} className="cart-item-count__decrease">-</button>
            <span className="cart-item-count__quantity">{quantity}</span>
            <button type="button" onClick={handleIncrease} className="cart-item-count__increase">+</button>
        </div>
    );
};

export default CartItemCount;