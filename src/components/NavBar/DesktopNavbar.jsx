import React, { useState, useEffect } from "react";
import search from "../../assets/images/loupe.png";
import CartWidget from "../CartWidget/CartWidget";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { HashLink as Link } from "react-router-hash-link";
import "./DesktopNavbar.css";
import SearchModal from "./SearchModal";

const DesktopNavbar = () => {
  // Category Logic
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
    <nav className="navbar navbar-dark">
      <div className="my-auto d-lg-flex bg-blur px-3 px-xl-4">
        <ul className="navbar-nav d-flex flex-row my-auto">
          <li className="nav-item nav-link">
            <Link
              to="/#"
              className="nav-item nav-link link-header px-1 me-2 me-lg-4 me-xxl-5 w-fit"
            >
              Home
            </Link>
          </li>
          <li className="nav-item dropdown nav-link">
            <Link
              className="nav-link dropdown-toggle link-header px-1 me-2 me-lg-4 me-xxl-5 w-fit"
              id="navbarDestinationsDropdownMenu"
              aria-expanded="false"
            >
              Destinations
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur"
              aria-labelledby="navbarDestinationsDropdownMenu"
              role="menu"
            >
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/TaYaOkO60Hyv6zmeM5Gx"
                >
                  South America
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/A8LwpoHUBDZCqImK7R2N"
                >
                  Black Sea
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/QwOCbVoEdFD1oRaAbpHZ"
                >
                  Oceania
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/gc9p3skuP8MdM65sjdY9"
                >
                  Southern Africa
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/rcn1XC89ShCdKGz8OLtc"
                >
                  Caribbean
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/w2qBD1fsugRTlY0DacST"
                >
                  Mediterranean
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/JXQBQh4WuK4IumdV210C"
                >
                  Antarctic
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/detail/tSzzgtCdEcjC4ROW14Db"
                >
                  Central Pacific
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-link">
            <Link
              className="nav-link dropdown-toggle link-header px-1 me-2 me-lg-4 me-xxl-5 w-fit"
              id="navbarExperienceDropdownMenu"
              aria-expanded="false"
              to="/experience"
            >
              Experience
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur"
              aria-labelledby="navbarExperienceDropdownMenu"
            >
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/experience/on-board"
                >
                  On Board
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/experience/ashore"
                >
                  Ashore
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  to="/experience"
                >
                  Membership{" "}
                  <span>
                    <i className="fa-solid fa-chevron-right small"></i>
                  </span>
                </Link>
                <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/experience"
                    >
                      Suscribe Now
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-link">
            <Link
              className="nav-link dropdown-toggle link-header px-1 me-2 me-lg-4 me-xxl-5 w-fit"
              id="navbarCruisesDropdownMenu"
              aria-expanded="false"
            >
              Cruises
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur"
              aria-labelledby="navbarCruisesDropdownMenu"
            >
              {cat.map((category) => (
                <Link
                  className="dropdown-item roboto-font d-flex justify-content-between"
                  key={category.id}
                  to={`/category/${category.path}`}
                >
                  {category.name}
                </Link>
              ))}
            </ul>
          </li>
          <li className="nav-item dropdown nav-link">
            <Link
              className="nav-link dropdown-toggle link-header px-1 me-2 me-lg-4 me-xxl-5 w-fit"
              to="/contact"
              id="navbarContactDropdownMenu"
              aria-expanded="false"
            >
              Contact Us
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur"
              aria-labelledby="navbarContactDropdownMenu"
            >
              <Link
                className="dropdown-item roboto-font d-flex justify-content-between"
                to="#advisors"
              >
                Advisors
              </Link>
              <Link
                className="dropdown-item roboto-font d-flex justify-content-between"
                to="/contact/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="dropdown-item roboto-font d-flex justify-content-between"
                to="/contact/terms-of-use"
              >
                Terms of Use
              </Link>
              <Link
                className="dropdown-item roboto-font d-flex justify-content-between"
                to="/contact/faqs"
              >
                FAQs
              </Link>
            </ul>
          </li>
          <li className="nav-item nav-link">
            <Link
              className="nav-link link-header text-nowrap px-1 me-2 me-xxl-3 w-fit"
              to="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
        <div className="my-auto px-3 px-xl-4">
          <ul className="navbar-nav flex-row align-items-center gap-3 gap-xl-4">
            <li className="nav-item nav-link">
              <SearchModal />
            </li>
            <li className="nav-item nav-link">
              <div className="nav-link link-icon" to="/pre-checkout">
                <CartWidget />
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-brands my-auto ps-3 px-xl-4">
          <ul className="navbar-nav social-media flex-row gap-3 gap-xl-4">
            <li className="nav-item nav-link">
              <a
                className="nav-link link-icon"
                href="https://www.facebook.com"
                target="_blank"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li className="nav-item nav-link">
              <a
                className="nav-link link-icon"
                href="https://www.instagram.com"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item nav-link">
              <a
                className="nav-link link-icon"
                href="https://github.com/erosdgc"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="nav-item nav-link">
              <a
                className="nav-link link-icon"
                href="https://www.linkedin.com/in/erosdgc/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
