import React from 'react'
import logo from "../images/hifi_logo1.png";
// import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
      <AnchorLink className="navbar-brand" to=''><img className='logo' src={logo} alt= "logo.." /></AnchorLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars}  style={{color: "#fff"}} />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
          <AnchorLink  className="nav-link " aria-current="page" href="#Hero-Section">Home</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink  className="nav-link " href="#about">About Us</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink   className="nav-link " href="#services">Our Services</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink  className="nav-link " href="#team">Our People</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink  className="nav-link " href="#contact">Contact Us</AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar