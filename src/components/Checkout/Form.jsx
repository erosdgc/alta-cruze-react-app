import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
// import Cart from '../Cart/Cart';
// import BirthDay from './BirthDay';
import "./Form.css";

const Form = ({ handleId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
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
    const refOrden = collection(db, "orders");
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
    <div className="container mt-5">
      <div className="mb-4">
        <h1 className="display-3">Who's traveling?</h1>
        <p className="text-muted mt-3">
          To save your reservation, we need the details of each traveler per
          stateroom. Remember, first and last names must match what appears on
          government-issued IDs.
        </p>
      </div>
      <div className="card rounded-0 shadow-sm p-5">
        <h2 className="display-6 pb-2">Primary Guest Information</h2>
        <hr className="mb-4" />
        <p className="text-muted">Please fill in the data below to proceed:</p>
        <form className="col-xxl-12 mx-auto" action="" onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-md-6">
              <div className="firstNameInput mt-3">
                <label className="col-12" htmlFor="first_name">
                  First Name:
                </label>
                <input
                  className="col-12 form-control rounded-0 mt-2"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstName}
                  required
                />
              </div>
              <div className="lastNameInput mt-3">
                <label className="col-12" htmlFor="last_name">
                  Last Name:
                </label>
                <input
                  className="col-12 form-control rounded-0 mt-2"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastName}
                  required
                />
              </div>
              <label htmlFor="citizenship" className="mt-3">
                Citizenship:
              </label>
              <select
                className="form-select rounded-0 mt-2"
                aria-label="Citizenship"
                value={citizenship}
                onChange={handleCitizenship}
                required
              >
                <option defaultValue>Select</option>
                <option value="african">African</option>
                <option value="american">American</option>
                <option value="asian">Asian</option>
                <option value="european">European</option>
                <option value="oceanian">Oceanian</option>
              </select>
            </div>
            <div className="col-md-6">
              <div className="phoneNumberInput mt-3">
                <label className="col-12" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  className="col-12 form-control rounded-0 mt-2"
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhone}
                  required
                />
              </div>
              <div className="emailAddressInput mt-3">
                <label className="col-12" htmlFor="email">
                  Email Address:
                </label>
                <input
                  className="col-12 form-control rounded-0 mt-2"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmail}
                  required
                />
                {/* <BirthDay /> */}
              </div>
              <label htmlFor="gender" className="mt-3">
                Gender:
              </label>
              <select
                className="form-select rounded-0 mt-2"
                aria-label="Gender"
                value={gender}
                onChange={handleGender}
                required
              >
                <option defaultValue>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="checkbox text-center mt-4">
              <label className="termsContainer">
                <input type="checkbox" required /> I agree{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Terms_of_service"
                  className="terms"
                >
                  Terms of Service & Conditions
                </a>
              </label>
            </div>
            <button className="mx-auto btn btn-success rounded-0 mt-4">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;