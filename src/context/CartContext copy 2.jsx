import React, {useState, createContext} from 'react'

export const CartContext = createContext();

// export const useCartContext = () => useContext(CartContext);

const CartProvider = ( props ) => {
  console.log(props);
    const [cart, setCart] = useState([]);

    // const addItem = (item, quantity) => {
    //   const product = { ...item, quantity };
    //   setCart(product);
    // };

    const totalUnities = () => {
      const copia = [...cart];
      let count = 0;
      copia.forEach((producto) => {
          count = count + producto.cantidad;
      });
      return count;
  };

    const addItem = (item, quantity) => {
      if (isSelected(item.id)) {
        setCart(cart.map(product => {
          return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
        }));
      }
    };

    const removeItemFromCart = (id) => setCart(cart.filter(product => product.id !== id));

    const isSelected = (id) => cart.find(product => product.id === id) ? true : false;

    const clearCart = () => setCart ([]);

  return (
    <CartContext.Provider value={{
        cart,
        addItem,
        removeItemFromCart,
        isSelected,
        clearCart,
        totalUnities
    }}>
        {props.children}
        <h1 className='display-2 text-center'>Context is working ✓</h1>
    </CartContext.Provider>
  )
}

export default CartProvider