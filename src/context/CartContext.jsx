import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const saveToLocalStorage = () => {
    if (cart.length === 0) return localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  saveToLocalStorage();

  const addToCart = (item, quantity) => {
    const cruise = { ...item, quantity };
    if (isInCart(cruise.id)) {
      // Busco el cruise/viaje y le sumo la cantidad
      addQuantity(cruise);
    } else {
      setCart([...cart, cruise]);
    }
  };

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteAll,
        totalUnities,
        totalPrice,
        deleteOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
