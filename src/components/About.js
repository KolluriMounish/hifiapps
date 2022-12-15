import React from 'react'
import logo1 from '../images/HifiApp.png'

const About = () => {
  return (
    <div id="about" className="container py-5">
    <div className="row">
      <div className="col-lg-6 col-xm-12">
        <div className="photo-wrap mb-5">
          <img className="profile-img" src={logo1} alt="author..." />
        </div>
      </div>
      <div className="col-lg-6 col-xm-12">
        <h1 className="about-heading">about us</h1>
        <p>
          With Hifi Apps, you can unleash the full potential of your IT transformation and achieve your vision for the future.
          We provides simplified access to our entire portfolio of award-winning technology solutions through a scalable as a service model. 
        </p>
        <p>
        We leverage our holistic portfolio of capabilities in consulting, design, 
        engineering, operations, and emerging technologies to help clients realize their boldest ambitions and build future-ready, sustainable businesses.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About