import React from "react";
// import "./NavBar.css";
import logo from "../../assets/images/icon.png";
import search from "../../assets/images/loupe.png";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <div className="bg-blur">
            <header className="navbar navbar-expand-xl">
                <nav className="container-fluid">
                    <div className="logo-image px-4 d-flex flex-row align-items-center justify-content-center px-5">
                        <a aria-current="page" href="/main">
                            <img src={logo} alt="Atlas Cruzer - Cruises Around The World" />
                        </a>
                        <h1 className="px-4 roboto-font position-fixed text-shadow"> <a className="text-reset text-decoration-none" href="/main" role="button">ΛTLΛS <span>CRUZER</span></a></h1>
                    </div>
                    <div className="dropdowns ms-auto">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-blur" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="/destinations" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Destinations</a>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarLightDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/South-America.jsx">South America <span><i className="fa-solid fa-chevron-right"></i></span>
                                            </a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/new_year">New Year</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Black-Sea.jsx">Black Sea <span><i className="fa-solid fa-chevron-right"></i></span>
                                            </a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Oceania.jsx">Oceania <span><i className="fa-solid fa-chevron-right"></i></span>
                                            </a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/new_year">New Year</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Southern-Africa.jsx">Southern Africa <span><i className="fa-solid fa-chevron-right"></i></span>
                                            </a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/new_year">New Year</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Caribbean.jsx">Caribbean <span><i className="fa-solid fa-chevron-right"></i></span>
                                            </a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/new_year">New Year</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Mediterranean-Sea.jsx">Mediterranean Sea <span><i className="fa-solid fa-chevron-right"></i></span>
                                            </a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a></li>
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Antartic.jsx">Antartic <span><i className="fa-solid fa-chevron-right"></i></span></a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a></li>
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/new_year">New Year</a></li>
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Central-Pacific.jsx">Central Pacific <span><i className="fa-solid fa-chevron-right"></i></span></a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/2022">2022</a></li>
                                                <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/2023">2023</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="/experience" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Experience
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="/onboard">On Board</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="/ashore">Ashore</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item roboto-font d-flex justify-content-between" href="/membership">Membership <span><i className="fa-solid fa-chevron-right"></i></span></a>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <a className="dropdown-item roboto-font d-flex justify-content-between" href="/suscribe">Suscribe Now</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="/offers" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opportunities</a>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/special_offers">Special Offers</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/thematic_cruises">Thematic Cruises</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/new_year">New Year</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/upcoming">22/23</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/opportunities">Other Offers</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="/ships" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ships</a>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/contessa">Contessa</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/dreamweaver">Dreamweaver</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/jolly_roger">Jolly Roger</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/expedition">Expedition</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/beowulf">Beowulf</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/adventure_I">Adventure I</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/cleopatra">Cleopatra</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/silhouette">Silhouette</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="/contact" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/contact">Advisors</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/contact">Phone Number</a></li>
                                        <li><a className="dropdown-item roboto-font d-flex justify-content-between" href="/contact">E-Mail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-link">
                                    <a className="nav-link link-header text-nowrap" href="/about">About Us</a>
                                </li>
                            </ul>
                            <div className="bg-blur px-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="/search"><img className="search" src={search} alt="Search button" /></a>
                                    </li>
                                    <li className="nav-item dropdown nav-link">
                                        <a className="nav-link dropdown-toggle link-icon" href="/account" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {/* <CartWidget /> */}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-brands px-3">
                                <ul className="navbar-nav social-media">
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="instagram.com"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="twitter.com"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="https://www.linkedin.com/in/erosdavidgomezcentofanti/"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;