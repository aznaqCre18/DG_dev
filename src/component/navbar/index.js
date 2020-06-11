import React from "react";
import { TweenLite, Power3, gsap } from "gsap";

import Logo from "./../../assets/logo.svg";
import "./style.scss";
import Burger from "./../Burger";

export default function navMenu() {
  const showMenu = (item) => {
    TweenLite.fromTo(
      item,
      0.3,
      {
        opacity: 0,
        y: "-100%",
      },
      {
        opacity: 1,
        display: "block",
        y: 0,
        ease: Power3.easeIn,
      }
    );
  };

  const hideMenu = (item) => {
    TweenLite.fromTo(
      item,
      0.5,
      {
        opacity: 1,
        y: "0",
      },
      {
        opacity: 0,
        y: "-100%",
        ease: Power3.easeOut,
      }
    );
  };

  const setToActive = () => {
    const burgerIcon = document.querySelector(".burger-container");
    const navMenu = document.querySelector(".navbar-container");

    if (burgerIcon.classList.contains("active")) {
      burgerIcon.classList.remove("active");
      navMenu.classList.remove("show");
      hideMenu(navMenu);
    } else {
      burgerIcon.classList.add("active");
      navMenu.classList.add("show");
      showMenu(navMenu);
    }
  };

  const handleShow = () => {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    } else {
      dropdown.classList.add("show");
    }
  };

  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="nav-menu-container">
          <div className="main-menu-nav">
            <ul>
              <li>Home</li>
              <li className="team" onClick={handleShow}>
                <span>Team</span>
                <div className="dropdown">
                  <div>U-08 - 10</div>
                  <div>U-11 - 12</div>
                  <div>U-13 - 15</div>
                </div>
              </li>
              <li>Gallery</li>
              <li>About</li>
            </ul>
          </div>
          {/* <div className="list-about">
            <h3>List</h3>
            <h3>List</h3>
            <h3>List</h3>
            <h3>List</h3>
          </div> */}
        </div>
      </div>
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="list-menu">
          <ul>
            <li>HOME</li>
            <li className="team" onClick={handleShow}>
              <span>TEAM</span>
              <div className="dropdown">
                <div>U-08 - 10</div>
                <div>U-11 - 12</div>
                <div>U-13 - 15</div>
              </div>
            </li>
            <li>GALLERY</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <Burger change={setToActive} />
      </div>
    </React.Fragment>
  );
}
