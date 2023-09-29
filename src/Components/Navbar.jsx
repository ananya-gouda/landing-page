import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import logo from "../Images/logo-removebg-preview.png"
import "../stylesheets/Navbar.css"

const Navbar = () => {
  return (
    <div >
      <div className="navbar navbar-expand-lg bg-body-tertiary navigation" >
        <div className="container-fluid navigation">
          <a className="navbar-brand navigation-link nav-image" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler navigation-item"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
