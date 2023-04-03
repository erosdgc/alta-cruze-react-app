import React, { useState, useEffect } from "react";
import logo from "../../assets/images/icon.png";
import search from "../../assets/images/loupe.png";
import CartWidget from "../CartWidget/CartWidget";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { HashLink as Link } from "react-router-hash-link";
import DesktopNavbar from "./DesktopNavbar";
import "./Navbar.css";
// import NavContext from "../../context/NavContext";

const Navbar = () => {
  // Sidebar Logic
  const [sidebar, setSidebar] = useState(false);
  // const altSidebar = () => setSidebar(!sidebar);
  const showSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

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

  // Navbar Color Change on Scroll Logic
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header>
      <IconContext.Provider value={{ color: "hsla(0deg, 0%, 100%, 0.85)" }}>
        <div
          className={
            color ? "navbar bg-blur bg-color" : "navbar bg-transparent"
          }
        >
          <div className="logo-image px-1 px-sm-2 px-md-3 px-lg-4 d-flex flex-row align-items-center justify-content-center ms-lg-5 ms-sm-5 ms-4">
            <Link aria-current="page" to="/#">
              <img src={logo} alt="Atlas Cruzer - Cruises Around The World" />
            </Link>
            <h1 className="px-4 roboto-font position-fixed d-flex flex-column align-items-center">
              <Link
                className="text-reset text-decoration-none display-6 brand-link-home"
                to="/#"
                role="button"
              >
                ΛTLΛS <span>CRUZER</span>
              </Link>
            </h1>
          </div>
          <Link className="navbar-toggler-icon d-flex justify-content-center align-items-center d-xl-none">
            <AiIcons.AiOutlineMenu onClick={showSidebar} />
          </Link>
          <div className="ms-auto d-none d-xl-block">
            <DesktopNavbar />
          </div>
        </div>
        <nav
          className={
            sidebar ? "nav-menu active d-xl-none" : "nav-menu d-xl-none"
          }
        >
          <ul className="nav-menu-items list-unstyled mt-5 mx-auto">
            <Link
              className="navbar-toggler-icon navbar-toggler menu-bar"
              onClick={closeSidebar}
            >
              <AiIcons.AiOutlineClose className="" />
            </Link>

            <ul className="navbar-nav gap-4 gap-xl-0 px-lg-0 mt-5 w-fit">
              <Link
                to="/#"
                className="nav-item nav-link link-header px-1 ms-xl-4 me-2 me-xxl-4 my-auto my-0 w-fit"
                onClick={closeSidebar}
              >
                Home
              </Link>
              <li className="nav-item dropdown nav-link">
                <Link
                  className="nav-link dropdown-toggle link-header px-1 ms-xl-4 me-2 me-xxl-4 w-fit"
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
                      onClick={closeSidebar}
                    >
                      South America
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/A8LwpoHUBDZCqImK7R2N"
                      onClick={closeSidebar}
                    >
                      Black Sea
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/QwOCbVoEdFD1oRaAbpHZ"
                      onClick={closeSidebar}
                    >
                      Oceania
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/gc9p3skuP8MdM65sjdY9"
                      onClick={closeSidebar}
                    >
                      Southern Africa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/rcn1XC89ShCdKGz8OLtc"
                      onClick={closeSidebar}
                    >
                      Caribbean
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/w2qBD1fsugRTlY0DacST"
                      onClick={closeSidebar}
                    >
                      Mediterranean
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/JXQBQh4WuK4IumdV210C"
                      onClick={closeSidebar}
                    >
                      Antarctic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/detail/tSzzgtCdEcjC4ROW14Db"
                      onClick={closeSidebar}
                    >
                      Central Pacific
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-link">
                <Link
                  className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4 w-fit"
                  id="navbarExperienceDropdownMenu"
                  aria-expanded="false"
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
                      to="/experience"
                      onClick={closeSidebar}
                    >
                      Atlas Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/experience/on-board"
                      onClick={closeSidebar}
                    >
                      On Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/experience/ashore"
                      onClick={closeSidebar}
                    >
                      Ashore
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item roboto-font d-flex justify-content-between"
                      to="/experience/membership"
                      onClick={closeSidebar}
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
                          to="/experience/membership/register"
                          onClick={closeSidebar}
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
                  className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4 w-fit"
                  id="navbarCruisesDropdownMenu"
                  aria-expanded="false"
                  onClick={showSidebar}
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
                      onClick={closeSidebar}
                    >
                      {category.name}
                    </Link>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown nav-link">
                <Link
                  className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4 w-fit"
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
                    to="/contact/advisors"
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
                  className="nav-link link-header text-nowrap px-1 me-2 me-xxl-4 w-fit"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="mt-4 mt-xl-0">
              <ul className="navbar-nav flex-row align-items-center gap-4 gap-xl-0">
                <li className="nav-item nav-link pe-2">
                  <Link className="nav-link link-icon" to="/search">
                    <img className="search" src={search} alt="Search button" />
                  </Link>
                </li>
                <li className="nav-item dropdown nav-link ps-1">
                  <Link
                    className="nav-link link-icon"
                    to="/pre-checkout"
                    onClick={closeSidebar}
                  >
                    <CartWidget />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-brands mt-4 mt-xl-0">
              <ul className="navbar-nav social-media flex-row gap-4 gap-xl-0">
                <li className="nav-item nav-link pe-2">
                  <a
                    className="nav-link link-icon"
                    href="https://www.facebook.com"
                  >
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li className="nav-item nav-link px-2">
                  <a
                    className="nav-link link-icon"
                    href="https://www.instagram.com"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item nav-link px-2">
                  <a
                    className="nav-link link-icon"
                    href="https://github.com/erosdgc"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="nav-item nav-link ps-2">
                  <a
                    className="nav-link link-icon"
                    href="https://www.linkedin.com/in/erosdavidgomezcentofanti/"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default Navbar;
