import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
  } from "react-share";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="d-flex">
            <p>Address: </p>
            </div>
            <div className="d-flex">
              <p>99 Reservoir SA 5092, Australia</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+61(8)87777335 / 0405093202</a>
            </div>
            <div className="d-flex">
              <p>info@hifiapps.com.au</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href='#home'>Home</a>
                <br />
                <a className="footer-nav" href='#home'>About Us</a>
                <br />
                <a className="footer-nav" href='#home'>Our Services</a>
              </div>
              <div className="col">
                <a className="footer-nav" href='#home'>Our Team</a>
                <br />
                <a className="footer-nav" href='#home'>Contact Us</a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Hifi Apps | All Rights Reserved
            </p>
            {/* <p className="pt-3 text-center">
              &nbsp; Developer | Kolluri Mounish
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer