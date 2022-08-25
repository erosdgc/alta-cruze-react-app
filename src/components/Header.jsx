import React from "react";
import logo from "../assets/images/icon.png";

const Header = () => {
    return (
        <div className="container-fluid sticky-top">
            <header className="row bg-blur">
                <nav className="navbar navbar-expand-lg">
                    <div className="logo-image col px-4">
                        <a aria-current="page" href="#">
                            <img src={logo} alt="Atlas Cruzer - Cruises" />
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
                                        <li><a class="dropdown-item roboto-font" href="#">On Board</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Ashore</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Membership</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Destinations</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarLightDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font" href="#">South America</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Black Sea</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Oceania</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Southern Africa</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Caribbean</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Mediterranean Sea</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Antilles</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Central Pacific</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Offers</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font" href="#">Membership</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Special Offers</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Thematic Cruises</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">New Year</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">22/23</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Other Offers</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ships</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font" href="#">Contessa</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Dreamweaver</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Jolly Roger</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Expedition</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Beowulf</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Adventure I</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Cleopatra</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Silhouette</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                    <a className="nav-link dropdown-toggle link-header" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
                                    <ul class="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item roboto-font" href="#">Advisors</a></li>
                                        <li><a class="dropdown-item roboto-font" href="#">Phone Number</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-link">
                                    <a className="nav-link link-header" href="#">About Us</a>
                                </li>
                                <li className="nav-item nav-link">
                                    <a className="nav-link link-icon" href="#"><i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;