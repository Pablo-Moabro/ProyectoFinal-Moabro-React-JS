import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ( {children} ) => {

    const [cartItems, setCartItems] = useState([]);

    console.log(cartItems);

    const addItem = (item) =>{
        const exitingItemIndex = cartItems.findIndex(currentItem => currentItem.id === item.id)

        if(exitingItemIndex !== -1){
            const updatedItems = cartItems.map((currentItem, index) => index === exitingItemIndex
                ? {...currentItem, quantity: currentItem.quantity + item.quantity}
                :   currentItem
            );
                setCartItems(updatedItems);
        } else{
            setCartItems([...cartItems, item]);
        }
    };

    const removeItem = (id) =>{
        setCartItems(cartItems.filter(currentItem => currentItem.id !== id));
    }

    const clearCart = () => {
        setCartItems([])
    };
    
    const updateItemQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    }; 

    return(
        <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, updateItemQuantity}}>
            {children}
        </CartContext.Provider>
    )

}