import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, deleteOne, deleteAll, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  if (cart.length === 0) {
    return <Link to="/">Home</Link>;
  }

  return (
    <div className='container mt-3 mb-5'>
      <h2 className='display-1 border-bottom mb-3 py-2 text-center'>Pre-Checkout</h2>
      {cart.map((cruise) => (
        <div key={cruise.id} className="col-4 cartProduct card border-0 rounded-0 shadow p-0">
          {/* <img className='col-12 rounded-0'
            src={cruise.image}
            alt={cruise.alt}
          /> */}
          <div className='px-5'>
            <h2 className='display-2 mt-3'>{cruise.title}</h2>
            <h3 className='display-6 mt-3 travelers'>Travelers: <span>{cruise.quantity}</span></h3>
            <div className='mt-4'>
              <blockquote className='blockquote'>Will you be traveling with minors under 18?</blockquote>
              <figcaption className='blockquote-footer'>Parents/guardians must ensure that the child does not roam freely on the ship.</figcaption>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
            <p className='display-6 mt-3 price'>Price per traveler: <span>${cruise.price}.-</span></p>
            <p className='display-6 mt-3 subtotal'>Subtotal: <span>${cruise.price * cruise.quantity}.-</span></p>
            <p className='disclaimer text-muted notext-uppercase text-justify'>All prices are listed in USD. Prices and availability are subject to change without notice. While we strive for accuracy, mistakes happen. In the event of an incorrect price on a quote or order, you will be notified by email or phone, and given the option to accept the corrected price or cancel the reservation at least 30 days prior to established departure date.</p>
          </div>
          <div className='px-3'><button className='btn btn-warning rounded-0 hover-shadow shadow-sm col-12 mx-auto mt-4 mb-4 remove-cruise' onClick={() => deleteOne(cruise.id)}>REMOVE CRUISE</button></div>
        </div>
      ))}
      <div className='col-4 mx-auto card border-0 rounded-0 shadow p-3 mt-4'>
        <h2 className='display-4 text-center mt-4 total'>Total: <br/><span className='display-5'>${total}.-</span></h2>
        <Link className='btn btn-success rounded-0 hover-shadow shadow col-12 mt-4 checkout' to="/checkout">CHECKOUT</Link>
        <button className='btn btn-danger rounded-0 hover-shadow shadow col-12 mt-4' onClick={deleteAll}>REMOVE ALL</button>
      </div>
    </div>
  );
};

export default Cart;