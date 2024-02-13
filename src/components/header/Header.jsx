import React, { useState } from "react";
import logo from "../../assets/images/logo.png"
import "./header.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar apple ">

<div
      className={`nav-toggle ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="bar"></div>
    </div>

        <div className={`nav-items ${isOpen && "open"}`}>
      <a href="/service" className="none">My Account</a>
      <a href="/home">Shop</a>
      <a href="/about">Blog</a>
      <a href="/service">About</a>
      
    </div>
    

    <div>
        <img src={logo} alt="" />
    </div>

    <span className="nav-logo">
        <a href="/about">Cart (0) </a>
      <a href="/service"className="hidden" >My Account</a></span>

    
  </div>
  )
}

export default Header