import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, deleteOne, deleteAll } = useContext(CartContext);
  return (
    <div className='container row m-auto mb-5'>
      <h2 className='display-1 border-bottom mb-4 py-2 text-center'>Cart</h2>
      {cart.map((cruise) => (
          <div key={cruise.id}>
              <h2>{cruise.title}</h2>
              <button onClick={() => deleteOne(cruise.id)}>
                  Remove cruise
              </button>
          </div>
      ))};
      <button className='btn btn-danger roboto-font rounded-0 p-3 hover-shadow shadow' onClick={deleteAll}>Remove all</button>
    </div>
  );
};

export default Cart;