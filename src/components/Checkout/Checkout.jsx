import React, { useState } from 'react'
import Form from './Form';
import './Checkout.css';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (reservationNumber) => {
        setOrderId(reservationNumber);
    };

    if (orderId) {
        return (
            <div className='container mt-5 mb-5'>
                <div className='card border-0 rounded-0 shadow col-6 mx-auto p-4'>
                    <h1 className='text-center border-bottom display-5 py-3'>CHECKOUT</h1>
                    <p className='lead'>Thank you for trusting Atlas Cruzer for your next cruise trip! This is your reservation number: 
                        <span className='res_number'>
                        {orderId}</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout