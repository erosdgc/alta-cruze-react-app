import React, { useEffect, useRef, useState } from "react";
import { BiMessageCheck } from "react-icons/bi";
import emailjs from "emailjs-com";
import "./Subscribe.css";
import { Formik } from "formik";

const Subscribe = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [showModal]);

  // const [emailNewsletter, setEmailNewsletter] = useState("");

  // const handleEmailNewsletter = (e) => setEmailNewsletter(e.target.value);

  const form = useRef();

  const sendEmailNewsletter = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "service_se43kxa",
        // "change it",
        form.current
        // "uICEoXm-fs8PJnZJU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Formik
        initialValues={{
          from_email: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.from_email) {
            errors.from_email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.from_email)
          ) {
            errors.from_email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }, { setShowModal }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
            setSubmitting(false);
            setShowModal(true);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <form className="text-end" onSubmit={sendEmailNewsletter}>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="emailNewsletter" className="visually-hidden">
                Email address
              </label>
              <input
                id="emailNewsletter"
                className="form-control rounded-0"
                placeholder="Email Address"
                type="email"
                name="from_email"
                maxLength="75"
              />
              <button
                onClick={() => setShowModal(true)}
                disabled={isSubmitting}
                className="btn btn-warning rounded-0"
                type="submit"
                value="Send"
              >
                SUBSCRIBE
              </button>
              {showModal ? (
                <div className="subscribe-modal-container d-flex flex-column justify-content-center align-items-center">
                  <div className="col-10 col-md-6 col-xxl-4 d-flex flex-column justify-content-center align-items-center rounded-0 overflow-hidden bg-light bg-blur shadow-lg p-5">
                    <BiMessageCheck
                      size={65}
                      className="text-primary self-center mb-0"
                    />
                    <h2 className="lead fs-3 my-3 text-center text-dark">
                      You have successfully subscribed to our newsletter!
                    </h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="btn btn-primary col-4 rounded-0 mt-2"
                    >
                      OK
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Subscribe;
