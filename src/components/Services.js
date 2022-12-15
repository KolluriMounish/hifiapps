import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faAws, faSalesforce, faUikit} from '@fortawesome/free-brands-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
        <div id="services" className="services">
        <h1 className="py-3"> OUR services</h1>
        <div className="py-3">
            <div className="container">
                <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="box">
                        <div className="circle">
                            <FontAwesomeIcon icon={faUikit} size="2x" />
                        </div>
                        <h3>UI & UX design</h3>
                        <p>A user interface is essentially the features of a device or an application that allow a user to interact with it smoothly and intuitively. It’s humans’ unique approach that differentiates experiences. We follow Design Thinking
to conclude problems, and an agile approach tooling those problems.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="box">
                        <div className="circle">
                            <FontAwesomeIcon icon={faDesktop} size="2x" />
                        </div>
                        <h3>Web Application</h3>
                        <p>We are the team of professionals who can create groundbreaking desktop solutions from scratch, modernize your legacy solutions, create custom middleware for connectivity of your enterprise applications thus making your business process agile and effective. </p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="box">
                        <div className="circle">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </div>
                        <h3>IOS Development</h3>
                        <p>From technology consultation to design, integration and development services – we offer a complete cycle of mobile app development services that improve your user engagement and connect you to the right audience.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="box">
                        <div className="circle">
                            <FontAwesomeIcon icon={faAws} size="2x" />
                        </div>
                        <h3>AWS Services</h3>
                        <p>Using agile methodologies and extensive reusable blueprints, we can help speed your design, migration and operation on AWS Cloud regardless of your industry segment.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="box">
                        <div className="circle">
                            <FontAwesomeIcon icon={faSalesforce} size="2x" />
                        </div>
                        <h3>Salesforce CRM</h3>
                        <p> We deliver Salesforce services to clients in India & Internationally.
    Our team of domain experts cater to varied industries like Manufacturing, Retail, Healthcare & Hi-Tech Industries.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services