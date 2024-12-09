import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./imgs/Logo.svg";
const Navbar = () => {
  return (
    <nav className="py-5 navbar-container navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="Logo-contianer ms-2 mb-4">
          <img src={Logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="mx-3 nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link to="/team">Our Team</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
