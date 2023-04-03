import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import "./Form.css";

const Form = ({ handleId }) => {
  // const [form, setForm] = useState({});

  // First Name Input Data
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (e) => setFirstName(e.target.value);

  // Last Name Input Data
  const [lastName, setLastName] = useState("");
  const handleLastName = (e) => setLastName(e.target.value);

  // Gender Input Data
  const [gender, setGender] = useState("");
  const handleGender = (e) => setGender(e.target.value);

  // Citizenship Input Data
  const [citizenship, setCitizenship] = useState("");
  const handleCitizenship = (e) => setCitizenship(e.target.value);

  // Phone Input Data
  const [phone, setPhoneNumber] = useState("");
  const handlePhone = (e) => setPhoneNumber(e.target.value);

  // Email Input Data
  const [email, setEmail] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);

  // Terms Check Value
  const [terms, setTerms] = useState(false);
  const handleTerms = (e) => setTerms(e.target.checked);

  // Price Data
  const { totalPrice, cart } = useContext(CartContext);
  const total = totalPrice();

  // // "Global Form" Change Data
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // // "Global Form" Checked Data
  // const handleChecked = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.checked,
  //   });
  // };

  // Form Submit Data
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

  return (
    <div className="container-fluid form-container-height background-gradient">
      <img
        src="https://res.cloudinary.com/drulocuwt/image/upload/v1669131506/atlas-cruzer-react-app/various/checkout-form_zapzqd.jpg"
        className="bg-img position-fixed"
        alt="A child sitting on a suitcase"
      />
      <div className="px-1 px-sm-0 card-container form-card-container w-100">
        <div className="modal-dialog form-dialog pb-5 px-2 px-md-0">
          <div className="form-content shadow-lg px-3 px-md-4 py-4 p-lg-5 bg-tr bg-blur col-12 col-sm-10 col-md-8 mx-auto">
            <div className="mb-2">
              <h1 className="display-3">Who's traveling?</h1>
              <p className="text-muted mt-3">
                To save your reservation, we need the details of one traveler
                per stateroom. Remember, first and last names must match what
                appears on government-issued IDs.
              </p>
            </div>
            <div className="border shadow rounded-0 p-3 p-lg-4 modal-body">
              <h2 className="display-6 pb-2">Primary Guest Information</h2>
              <hr className="mb-4" />
              <p className="text-muted">
                Please fill in the data below to proceed:
              </p>
              <form className="col-lg-12 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <div className="col-md-6">
                    <div className="firstNameInput mt-3">
                      <label className="col-12" htmlFor="first_name">
                        First Name:
                      </label>
                      <input
                        className="col-12 form-control text-capitalize rounded-0 mt-2"
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
                        className="col-12 form-control text-capitalize rounded-0 mt-2"
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
                    <label htmlFor="terms" className="termsContainer">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value={terms}
                        onChange={handleTerms}
                        required
                      />{" "}
                      I agree to all statements in{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Terms_of_service"
                        className="terms text-reset border-bottom border-primary"
                      >
                        Terms of Service & Conditions
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    value="Submit"
                    className="mx-auto btn btn-primary col-11 col-md-8 col-lg-5 col-xl-4 mt-4"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
