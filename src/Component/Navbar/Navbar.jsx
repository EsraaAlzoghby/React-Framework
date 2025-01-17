import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
        <div>
             <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark fixed-top py-4 bg-nav">
                 <div className="container">
                     <NavLink className="navbar-brand fw-bolder fs-2" to="/">START FRAMEWORK</NavLink>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                             <li className="nav-item mx-2">
                                 <NavLink className="nav-link fw-bold" aria-current="page" to="about">ABOUT</NavLink>
                             </li>
                             <li className="nav-item mx-2">
                                 <NavLink className="nav-link fw-bold" to="portfolio">PORTFOLIO</NavLink>
                             </li>
                             <li className="nav-item mx-2">
                                 <NavLink className="nav-link fw-bold" to="contact">CONTACT</NavLink>
                             </li>
                         </ul>
                     </div>
                 </div>
             </nav>
         </div>
        </>
    )
}