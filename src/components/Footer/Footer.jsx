import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/icon.png";
import { db } from "../../firebaseConfig";
import "./Footer.css";
import Subscribe from "../Newsletter/Subscribe";

const Footer = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const categoryCollection = collection(db, "categories");

    getDocs(categoryCollection).then((resp) => {
      const categories = resp.docs.map((cat) => {
        return {
          id: cat.id,
          ...cat.data(),
        };
      });
      setCat(categories);
    });
  }, []);

  return (
    <div className="pt-md-4 bg-blur main-footer-container z-above">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="px-0 d-flex flex-row align-items-center justify-content-center justify-content-sm-start mb-4">
              <div className="logo-container px-md-2">
                <img
                  className="logo"
                  src={logo}
                  alt="Atlas Cruzer - Cruises Around The World"
                />
              </div>
              <div className="d-flex flex-column brand-name roboto-font position-fixed">
                <h3 className="roboto-font text-shadow display-6">ΛTLΛS</h3>
                <h3 className="roboto-font text-shadow display-6">CRUZER</h3>
              </div>
            </div>

            <div className="col-6 col-md-3 text-start ps-4 ps-sm-0 text-sm-start">
              <div className="col-12 mb-3">
                <Link
                  className="text-decoration-none link-light h5"
                  to="/about"
                >
                  About Us
                </Link>
                <ul className="nav flex-column footer-ul mt-2">
                  <li className="nav-item mb-2 w-fit">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Our Evolution
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit">
                    <a
                      href="https://www.linkedin.com/in/erosdgc/"
                      target="_blank"
                      className="nav-link p-0 sub-link-color"
                    >
                      Meet Our Team
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Partnerships
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Our Vision
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 mb-3">
                <HashLink
                  className="text-decoration-none link-light h5"
                  to="#viewCategory"
                >
                  Our Cruises
                </HashLink>
                <ul className="nav flex-column footer-ul mt-2">
                  {cat.map((category) => (
                    <Link
                      className="nav-item category sub-link-color mb-2 text-decoration-none w-fit"
                      key={category.id}
                      to={`/category/${category.path}`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-6 col-md-3 text-end pe-4 pe-sm-0 text-md-start">
              <div className="col-12 mb-3">
                <Link
                  className="text-decoration-none link-light h5"
                  to="/experience"
                >
                  Experience
                </Link>
                <ul className="nav flex-column footer-ul mt-2">
                  <li className="nav-item mb-2 w-fit ms-auto ms-md-0">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      On Board
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit ms-auto ms-md-0">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Ashore
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit ms-auto ms-md-0">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Membership
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 mb-3">
                <Link
                  className="text-decoration-none link-light h5"
                  to="/contact"
                >
                  Contact Us
                </Link>
                <ul className="nav flex-column footer-ul mt-2">
                  <li
                    className="nav-item mb-2 w-fit ms-auto ms-md-0"
                    id="advisors"
                  >
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Advisors
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit ms-auto ms-md-0">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit ms-auto ms-md-0">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      Terms of Use
                    </a>
                  </li>
                  <li className="nav-item mb-2 w-fit ms-auto ms-md-0">
                    <a href="/#" className="nav-link p-0 sub-link-color">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-5 offset-md-1 me-auto mt-4 mt-sm-0 px-4 px-sm-0">
              <div className="text-end">
                <h5 className="lead subscribe roboto-font">
                  Subscribe to our newsletter
                </h5>
                <p>
                  Do not miss anything and receive our offers and news every
                  month!
                </p>
              </div>
              <Subscribe />
              <p className="initialism mt-4 mt-sm-3 ms-auto text-end">
                Communicate with your Preferred Travel Advisor or one of our
                Specialists at +54 341 364 XXXX (ARG) for more information.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center pb-md-0 py-4 my-lg-4 border-top">
            <ul className="list-unstyled d-flex footer-brands gap-2">
              <li className="ms-3">
                <a
                  className="link-light"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-light"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-light"
                  href="https://www.linkedin.com/in/erosdgc/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-light"
                  href="https://github.com/erosdgc"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
            <p className="initialism mx-auto text-center">
              © 2022 Atlas Cruzer Project. Designed and developed by Eros David.
              All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
