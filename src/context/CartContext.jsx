import React, {useState, createContext} from 'react'

export const CartContext = createContext();

// export const useCartContext = () => useContext(CartContext);

const CartProvider = ( props ) => {
  console.log(props);
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
      const cruise = { ...item, quantity };
      if (isInCart(cruise.id)) {

// Busco el cruise y le sumo la cantidad
          addQuantity(cruise);
      } else {
          setCart([...cart, cruise]);
      }
      //spread operator -> ...
      // const persona = {id: 1, nombre: 'eric'}
      // ...persona --> id: 1, nombre: 'eric'
      // const edad = {...persona, edad: 27}
      //--> img: ';, price: 20
  };

  

    // const addItem = (item, quantity) => {
    //   if (isSelected(item.id)) {
    //     setCart(cart.map(cruise => {
    //       return cruise.id === item.id ? { ...cruise, quantity: cruise.quantity + quantity } : cruise
    //     }));
    //   }
    // };

    // const removeItemFromCart = (id) => setCart(cart.filter(cruise => cruise.id !== id));


    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
    };

    const addQuantity = (cruise) => {
      const cartUpdated = cart.map((cruiseInCart) => {
          if (cruise.id === cruiseInCart.id) {
              const cruiseUpdated = {
                  ...cruiseInCart,
                  quantity: cruise.quantity,
              };
              return cruiseUpdated;
          } else {
              return cruiseInCart;
          }
      });
      setCart(cartUpdated);
  };

    // const isSelected = (id) => cart.find(cruise => cruise.id === id) ? true : false;

    // Función para borrar todo el carrito
    const deleteAll = () => {
      setCart([]);
    };

    // Unidades totales
    const totalUnities = () => {
      const copy = [...cart];
      let count = 0;
      copy.forEach((cruise) => {
          count = count + cruise.quantity;
      });
      return count;
    };

    // Precio total
    const totalPrice = () => {
      const copy = [...cart];
      let count = 0;
      copy.forEach((cruise) => {
          count = count + cruise.quantity * cruise.price;
      });
      return count;
    };

    // Función para eliminar un viaje.
    const deleteOne = (id) => {
      const filteredCruises = cart.filter((prod) => prod.id !== id);
      setCart(filteredCruises);
    };


    // const clearCart = () => setCart ([]);

    const nombre = 'Eros';

    const saludo = () => {
        console.log(`Hola! ${nombre}`);
    };

  return (
    <CartContext.Provider value={{
        cart,
        saludo,
        addToCart,
        deleteAll,
        totalUnities,
        totalPrice,
        deleteOne
    }}>
        {props.children}
        <h1 className='display-2 text-center'>Context is working ✓</h1>
    </CartContext.Provider>
  )
}

export default CartProvider