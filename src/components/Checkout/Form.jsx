import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebaseConfig';
import BirthDay from './BirthDay';

const Form = ({ handleId }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const { totalPrice, cart } = useContext(CartContext);
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { firstName, lastName, phone },
            date: serverTimestamp(),
            cart,
            total,
        };
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleFirstName = (e) => setFirstName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    const handleGender = (e) => setGender(e.target.value);

    const handleCitizenship = (e) => setCitizenship(e.target.value);

    const handlePhone = (e) => setPhoneNumber(e.target.value);

    const handleEmail = (e) => setEmail(e.target.value);

    return (
        <div className='container mt-5'>
            <div>
                <h1 className='display-3'>Who's traveling?</h1>
                <p>To save your reservation, we need the details of each traveler per stateroom. Remember, first and last names must match what appears on government-issued IDs.</p>
            </div>

            <div className='card rounded-0 shadow-sm p-5'>
            <h2 className='display-6 pb-2'>Primary Guest Information</h2>
            <hr className='mb-4'/>
            <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
                required
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastName}
                required
            />
            <select class="form-select rounded-0" aria-label="Gender" value={gender} onChange={handleGender} required>
                <option selected>Select</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
            </select>
            <select class="form-select rounded-0" aria-label="Citizenship" value={citizenship} onChange={handleCitizenship} required>
                <option selected>Select</option>
                <option value="african">African</option>
                <option value="american">American</option>
                <option value="asian">Asian</option>
                <option value="european">European</option>
                <option value="oceanian">Oceanian</option>
            </select>
            <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhone}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmail}
                required
            />
            {/* <BirthDay /> */}
            <button>SEND</button>
        </form>
            </div>
        </div>
    );
};

export default Form