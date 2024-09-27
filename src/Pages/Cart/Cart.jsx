import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartItemCount from "../../components/CartItemCount/CartItemCount";


const Cart = () => {

    const {cartItems, removeItem, clearCart, updateItemQuantity} = useContext(CartContext)
    
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleQuantityChange = (item, newQuantity) =>  {

        if(newQuantity > 0){
            updateItemQuantity(item.id, newQuantity)
        }
    };
    
    return(
       <section className="cart">
            <h1>Carrito de compras</h1>
                {cartItems.length === 0 ?   
                    (<div className="cart-noitem">
                        <p>No tienes productos en el Carrito</p>
                        <Link className="cart-noitem__link" to="/store">Ir a la tienda</Link>
                    </div>) : (
                        <div className="cart-item__container">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <picture className="cart-item__picture">
                                    <img src={`${import.meta.env.BASE_URL}${item.img}`} alt={item.title} className="cart-item__img" />
                                    </picture>
                                    <div className="cart-item__details">
                                        <h3>{item.title}</h3>
                                        <p>Precio unitario: ${item.price}</p>
                                        <CartItemCount initialQuantity={item.quantity} stock={item.stock} onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)}/>
                                        <p>SubTotal: ${item.price * item.quantity}</p>
                                    </div>
                                        <button className="cart-item__deletebtn" onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                                
                            ))}
                                <div className="cart-summary">
                                    <h2>Total de la Compra: ${total}</h2>
                                    <button className="cart-summary__clearbtn" onClick={clearCart}>Vaciar Carrito</button>
                                    <Link to="/checkout">
                                        <button type="submit" className="cart-summary__checkoutbtn">Confirmar Compra</button>
                                    </Link>
                                </div>
                        </div>
                    ) }
       </section>
    );
};


export default Cart;
