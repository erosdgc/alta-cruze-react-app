import React from "react";
// import "./NavBar.css";
import logo from "../../assets/images/icon.png";
import search from "../../assets/images/loupe.png";
import CartWidget from "./CartWidget";
import ItemCount from "../Items/ItemCount";

const NavBar = () => {

    return (
        <div className="bg-blur">
            <header className="navbar navbar-expand-lg">
                <nav className="container-fluid">
                    <div className="logo-image px-4 d-flex flex-row align-items-center justify-content-center px-5">
                        <a aria-current="page" href="#">
                            <img src={logo} alt="Atlas Cruzer - Cruises Around The World" />
                        </a>
                        <h1 className="px-4 roboto-font position-fixed text-shadow"> <a role="button">ΛTLΛS <span>CRUZER</span></a></h1>
                    </div>
                    <div className="dropdowns ms-auto">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse bg-blur" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Destinations</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarLightDropdownMenuLink">
                                        <li>
                                            <a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/South-America.jsx">South America <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Black-Sea.jsx">Black Sea <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Oceania.jsx">Oceania <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Southern-Africa.jsx">Southern Africa <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Caribbean.jsx">Caribbean <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Mediterranean-Sea.jsx">Mediterranean Sea <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Antartic.jsx">Antartic <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="../components/Destinations/Central-Pacific.jsx">Central Pacific <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Experience</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">On Board</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Ashore</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Membership <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Suscribe Now</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Offers</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Membership</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Special Offers</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Thematic Cruises</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">22/23</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Other Offers</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ships</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Contessa</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Dreamweaver</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Jolly Roger</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Expedition</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Beowulf</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Adventure I</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Cleopatra</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Silhouette</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Advisors</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Phone Number</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">E-Mail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-link">
                                    <a className="nav-link link-header text-nowrap" href="#">About Us</a>
                                </li>
                            </ul>
                            <div className="bg-blur px-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="#"><img className="search" src={search} alt="Search button" /></a>
                                    </li>
                                    <li className="nav-item dropdown nav-link">
                                        <a className="nav-link dropdown-toggle link-icon" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <CartWidget />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-brands px-3">
                                <ul className="navbar-nav social-media">
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="#"><i class="fa-brands fa-square-facebook"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="#"><i class="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="#"><i class="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a className="nav-link link-icon" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
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