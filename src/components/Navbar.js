import React from 'react'
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#navbar"><img className='logo' src={logo} alt= "logo.." /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars}  style={{color: "#fff"}} />
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#ourservices">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#our people">Our People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar