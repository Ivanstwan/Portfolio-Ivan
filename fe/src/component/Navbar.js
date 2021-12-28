import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import "./navbar.css";

import PDF from "../Resume.pdf";

function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    console.log(window);
    console.log(window.scrollY);
  }, []);

  const changeColor = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 740 && burgerOpen) {
      setNavScroll(false);
    } else if (window.scrollY >= 740) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  window.addEventListener("click", changeColor);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className={navScroll ? "navbar-logo active" : "navbar-logo"}>
          Ivan Setiawan
        </h1>
        <div
          className="navbar-burger"
          onClick={() => {
            setBurgerOpen(!burgerOpen);
          }}
        >
          {navScroll ? (
            <div
              className={
                burgerOpen
                  ? "navbar-btn-burger open active"
                  : "navbar-btn-burger active"
              }
            ></div>
          ) : (
            <div
              className={
                burgerOpen ? "navbar-btn-burger open" : "navbar-btn-burger"
              }
            ></div>
          )}
        </div>
        {/* NAVBAR BURGER ACTIVE */}
        <div
          className={
            burgerOpen ? "navbar-burger-menu open" : "navbar-burger-menu close"
          }
        >
          <div className="navbar--open-text-container">
            <div
              className={
                burgerOpen ? "navbar--open-text" : "navbar--open-text close"
              }
            >
              {/* <div
                className={
                  burgerOpen
                    ? "navbar-burger-menu--open-text"
                    : "navbar-burger-menu--open-text close"
                }
              > */}
              <Link
                className="navbar-burger-menu--open-text"
                to="/"
                onClick={() => {
                  setBurgerOpen(!burgerOpen);
                }}
              >
                Home
              </Link>
              <div className="navbar-burger-menu--open-text2">
                General idea of the website.
              </div>
            </div>
            {/* <div
              className={
                burgerOpen ? "navbar--open-text" : "navbar--open-text close"
              }
            >
              <Link
                className="navbar-burger-menu--open-text"
                to="/about"
                onClick={() => {
                  setBurgerOpen(!burgerOpen);
                }}
              >
                About Me
              </Link>
              <div className="navbar-burger-menu--open-text2">
                Further information about the author.
              </div>
            </div> */}
            <div
              className={
                burgerOpen ? "navbar--open-text" : "navbar--open-text close"
              }
            >
              <a
                className="navbar-burger-menu--open-text"
                onClick={() => {
                  setBurgerOpen(!burgerOpen);
                }}
                href={PDF}
              >
                Resume
              </a>
              <div className="navbar-burger-menu--open-text2">
                Further information about the author.
              </div>
            </div>
            <div
              className={
                burgerOpen ? "navbar--open-text" : "navbar--open-text close"
              }
            >
              <Link
                className="navbar-burger-menu--open-text"
                to="/contact"
                onClick={() => {
                  setBurgerOpen(!burgerOpen);
                }}
              >
                Contact
              </Link>
              <div className="navbar-burger-menu--open-text2">
                Further information about the author.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
