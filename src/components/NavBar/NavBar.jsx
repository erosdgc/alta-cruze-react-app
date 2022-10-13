import React, { useEffect, useState } from "react";
import logo from "../../assets/images/icon.png";
import search from "../../assets/images/loupe.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./NavBar.css";

const NavBar = () => {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const categoryCollection = collection(db, 'category');

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
        <div className="bg-blur">
            <header className="navbar navbar-expand-xl">
                <nav className="container-fluid">
                    <div className="logo-image px-4 d-flex flex-row align-items-center justify-content-center ms-lg-5 ms-sm-5 ms-4">
                       <NavLink aria-current="page" to="/">
                            <img src={logo} alt="Atlas Cruzer - Cruises Around The World" />
                       </NavLink>
                        <h1 className="px-4 roboto-font position-fixed text-shadow">
                            <NavLink className="text-reset text-decoration-none" to="/" role="button">ΛTLΛS <span>CRUZER</span>
                            </NavLink>
                        </h1>
                    </div>
                    <div className="dropdowns ms-auto">
                        <button className="navbar-toggler me-lg-5 me-sm-5 me-4 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-blur" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown nav-link">
                                   <NavLink className="nav-link dropdown-toggle link-header px-1 ms-4 me-2 me-xxl-4" to="/destinations" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Destinations</NavLink>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarLightDropdownMenuLink">
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/south-america">South America <span><i className="fa-solid fa-chevron-right"></i></span>
                                           </Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/south-america/2022">2022 </Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/south-america/new-year">New Year </Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/south-america/2023">2023 </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/black-sea">Black Sea <span><i className="fa-solid fa-chevron-right"></i></span>
                                           </Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/black-sea/2023">2023</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/oceania">Oceania <span><i className="fa-solid fa-chevron-right"></i></span>
                                           </Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/oceania/2022">2022</Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/oceania/new-year">New Year</Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/oceania/2023">2023</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/southern-africa">Southern Africa <span><i className="fa-solid fa-chevron-right"></i></span>
                                           </Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/southern-africa/2022">2022</Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/southern-africa/new-year">New Year</Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/southern-africa/2023">2023</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/caribbean">Caribbean <span><i className="fa-solid fa-chevron-right"></i></span>
                                           </Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/caribbean/2022">2022</Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/caribbean/new-year">New Year</Link>
                                                </li>
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/caribbean/2023">2023</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/mediterranean-sea">Mediterranean Sea <span><i className="fa-solid fa-chevron-right"></i></span>
                                           </Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/mediterranean-sea/2022">2022</Link></li>
                                                <li><Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/mediterranean-sea/2023">2023</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/antartic">Antartic <span><i className="fa-solid fa-chevron-right"></i></span></Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                    <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/antartic/2022">2022</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/antartic/new-year">New Year</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/antartic/2023">2023</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/central-pacific">Central Pacific <span><i className="fa-solid fa-chevron-right"></i></span></Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li><Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/central-pacific/2022">2022</Link></li>
                                                <li><Link className="dropdown-item roboto-font d-flex justify-content-between" to="/destinations/central-pacific/2023">2023</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                   <Link className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4" to="/experience" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Experience
                                   </Link>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/experience/on-board">On Board</Link>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/experience/ashore">Ashore</Link>
                                        </li>
                                        <li>
                                           <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/experience/membership">Membership <span><i className="fa-solid fa-chevron-right"></i></span></Link>
                                            <ul className="submenu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur list-unstyled">
                                                <li>
                                                   <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/experience/membership/register">Suscribe Now</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                   <Link className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4" to="/category/offers" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cruises</Link>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        {cat.map((category) => (
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" key={category.id} to={`/category/${category.path}`}>
                                            {category.name}
                                        </Link>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                   <Link className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4" to="/ships" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ships</Link>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/contessa">Contessa</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/dreamweaver">Dreamweaver</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/jolly_roger">Jolly Roger</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/expedition">Expedition</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/beowulf">Beowulf</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/adventure_i">Adventure I</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/cleopatra">Cleopatra</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/silhouette">Silhouette</Link>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-link">
                                   <Link className="nav-link dropdown-toggle link-header px-1 me-2 me-xxl-4" to="/contact" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</Link>
                                    <ul className="dropdown-menu dropdown-menu-light rounded-0 border-0 bg-tr fade-down shadow-sm bg-blur" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/contact">Advisors</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/contact">Phone Number</Link>
                                        <Link className="dropdown-item roboto-font d-flex justify-content-between" to="/contact">E-Mail</Link>
                                    </ul>
                                </li>
                                <li className="nav-item nav-link">
                                   <Link className="nav-link link-header text-nowrap px-1 me-2 me-xxl-4" to="/about">About Us</Link>
                                </li>
                            </ul>
                            <div className="bg-blur px-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item nav-link">
                                       <Link className="nav-link link-icon" to="/search"><img className="search" src={search} alt="Search button" /></Link>
                                    </li>
                                    <li className="nav-item dropdown nav-link">
                                       <Link className="nav-link dropdown-toggle link-icon" to="/account" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <CartWidget />
                                       </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-brands px-3">
                                <ul className="navbar-nav social-media">
                                    <li className="nav-item nav-link">
                                       <a className="nav-link link-icon" href="https://www.facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                       <a className="nav-link link-icon" href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item nav-link">
                                       <a className="nav-link link-icon" href="https://github.com/erosdgc"><i className="fa-brands fa-github"></i></a>
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