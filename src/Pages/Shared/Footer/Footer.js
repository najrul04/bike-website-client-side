import React from 'react';
import './Footer.css';
// import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="logo_img" width="200px" src='' alt="" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h5>Quick Links</h5>
                        <div className="links">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Service</Link>
                            <Link to="/doctors">Employees</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <p className="fw-bold fs-5">Location: </p>
                        <p>Hazipara, Dhaka</p>
                        <p>House no-24, Road no-9</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>&copy; Best Bike</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;