import React, {useState, useContext} from 'react'
// import cruises from '../components/ItemFetch/Origin';


const CartContext = React.createContext([]);


export const useCartContext = () => useContext(CartContext);


function CartProvider( {children} ) {
    const [cart, setCart] = useState([]);


    // const addItem = () => ;


    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));


    const clear = () => setCart ([]);


    const isSelected = (id) => cart.find(cruises => cruises.id === id) ? true : false;
    

  return (
    <CartContext.Provider value={{
        // addItem,
        removeItem,
        clear,
        isSelected
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider