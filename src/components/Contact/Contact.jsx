import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='container mt-5'>
        <h1 className='display-1'>Send Us A Message</h1>
        <form className='validate-form col-6'>
            <label className='roboto-font mt-3' htmlFor='firstName'>Your name:</label>
            <div className='wrap-input100 rs1-wrap-input100 validate-input' data-validate='Type first name'>
                <input id='first-name' className='form-control rounded-0 mt-2' type='text' name='first-name' placeholder='First name' />
                <span className='focus-input100'></span>
            </div>
            <div className='wrap-input100 rs2-wrap-input100 validate-input mt-3' data-validate='Type last name'>
                <input className='form-control rounded-0' type='text' name='last-name' placeholder='Last name' />
                <span className='focus-input100'></span>
            </div>
            <label className='label-input100 mt-3' htmlFor='email'>Email Address:</label>
            <div className='wrap-input100 validate-input' data-validate='Valid email is required: ex@abc.xyz'>
                <input id='email' className='form-control mt-2 rounded-0' type='text' name='email' placeholder='example@email.com' />
                <span className='focus-input100'></span>
            </div>
            <label className='label-input100 mt-3' htmlFor='phone'>Phone number:</label>
            <div className='wrap-input100'>
                <input id='phone' className='form-control mt-2 rounded-0' type='number' name='phone' placeholder='Your phone number' />
                <span className='focus-input100'></span>
            </div>
            <label className='label-input100 mt-3' htmlFor='message'>Message:</label>
            <div className='wrap-input100 validate-input' data-validate='Message is required'>
                <textarea id='message' className='form-control rounded-0 mt-2' name='message' placeholder='Write us a message'></textarea>
                <span className='focus-input100'></span>
            </div>
            <div className='mt-4'>
                <button className='btn btn-warning rounded-0'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact