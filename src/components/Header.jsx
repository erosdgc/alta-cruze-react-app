import React from "react";
import logo from "../assets/images/icon.png";
import search from "../assets/images/loupe16.png";

const Header = () => {
    return (
        <div className="sticky-top bg-blur">
            <header className="navbar navbar-expand-lg">
                <nav className="container-fluid">
                    <div className="logo-image col px-4">
                        <a aria-current="page" href="#">
                            <img src={logo} alt="Atlas Cruzer - Cruises Around The World" />
                        </a>
                    </div>
                    <div className="dropdowns col">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse bg-blur col" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Atlas Cruzer</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
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
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Destinations</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarLightDropdownMenuLink">
                                        <li>
                                            <a class="dropdown-item roboto-font d-flex justify-content-between" href="#">South America <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Black Sea <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Oceania <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Southern Africa <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Caribbean <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Mediterranean Sea <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Antartic <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Central Pacific <span><i class="fa-solid fa-chevron-right"></i></span></a>
                                            <ul class="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2022</a></li>
                                                <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">2023</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Offers</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Membership</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Special Offers</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Thematic Cruises</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">New Year</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">22/23</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Other Offers</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ships</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
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
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Advisors</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">Phone Number</a></li>
                                        <li><a class="dropdown-item roboto-font d-flex justify-content-between" href="#">E-Mail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-link">
                                    <a className="nav-link link-header text-nowrap" href="#">About Us</a>
                                </li>
                                <li className="nav-item nav-link">
                                    <a className="nav-link link-icon" href="#"><img className="search" src={search} alt="Search button" /></a>
                                </li>
                            </ul>
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
                    <div className="cart"></div>
                </nav>
            </header>
        </div>
    )
}

export default Header;