import { Icon } from '@iconify/react';
import "./CartWidget.css"
import Pill from '../Pill/Pill';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';



const CartWidget = () =>{

    const {cartItems} = useContext(CartContext);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return(
        <Link to={"/cart"}>
        <div className='cart-widget'>
        <Pill quantity={totalQuantity} />
        <Icon className='cart-widget__cart' icon="bi:cart" />
        </div>
        </Link>
    );
};

export default CartWidget;