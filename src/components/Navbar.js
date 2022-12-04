import React from 'react'
import logo from "../images/logo.png";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
      <Link className="navbar-brand" href="#navbar"><img className='logo' src={logo} alt= "logo.." /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars}  style={{color: "#fff"}} />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link smooth={true} to="home" offset={-110} className="nav-link " aria-current="page" href="#home">Home</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about" offset={-110} className="nav-link " href="#aboutus">About Us</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="services" offset={-110} className="nav-link " href="#ourservices">Our Services</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="team" offset={-110}  className="nav-link " href="#our people">Our People</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="contact" offset={-110}  className="nav-link " href="#contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar