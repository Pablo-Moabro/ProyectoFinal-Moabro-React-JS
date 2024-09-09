import { Icon } from '@iconify/react';
import "./CartWidget.css"
import Pill from '../Pill/Pill';


const CartWidget = () =>{


    return(
        
        <div className='cart-widget'>
        <Pill quantity={2} />
        <Icon className='cart-widget__cart' Icon icon="bi:cart" />
        </div>
    );
};

export default CartWidget;