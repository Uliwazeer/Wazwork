import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "./imgs/Phone.svg";
import FaceBookIcon from "./imgs/Facebook.svg";
import TwitterIcon from "./imgs/Twitter.svg";
import LinkedInIcon from "./imgs/LinkedIn.svg";
import Logo from "./imgs/Logo.svg";
import "./Footer.css";
const Company = () => {
  return (
    <div className="col-md-4">
      <h3 className="my-4">Company</h3>
      <ul className="px-3">
        <h6 className="lh-lg">
          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>
        </h6>
        <h6 className="lh-lg">
          <Link to="/services" className="text-decoration-none text-dark">
            Services
          </Link>
        </h6>
        <h6 className="lh-lg">
          <Link to="/team" className="text-decoration-none text-dark">
            Our Team
          </Link>
        </h6>
        <h6 className="lh-lg">
          <Link to="/products" className="text-decoration-none text-dark">
            Products
          </Link>
        </h6>
      </ul>
    </div>
  );
};
const ContactUs = () => {
  return (
    <div className="col-md-4">
      <h3 className="my-4">Contact Us</h3>
      <h6 className="my-5">
        <img src={PhoneIcon} alt="phone-icon" />
        <Link
          to="tel:+2010568381"
          className="mx-1 text-decoration-none text-dark"
        >
          +2010568381
        </Link>
      </h6>
      <div>
        <Link to="#">
          <img className="" src={FaceBookIcon} alt="FaceBookIcon" />
        </Link>
        <Link to="#">
          <img className="mx-4" src={TwitterIcon} alt="TwitterIcon" />
        </Link>
        <Link to="#">
          <img className="" src={LinkedInIcon} alt="LinkedInIcon" />
        </Link>
      </div>
    </div>
  );
};
const Subscribe = () => {
  return (
    <div className="col-md-4">
      <h3 className="my-4">Subscribe</h3>
      <h6 className="my-5">
        Subscribe to Our Newsletter and be aware of our latests!
      </h6>

      <div className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          placeholder="Type your E-Mail..."
          className="form-control rounded-pill"
        />
        <button className="btn btn-primary rounded-pill mx-1">Subscribe</button>
      </div>
    </div>
  );
};
const CopyRights = () => {
  return (
    <div className="bg-gradint text-center py-1 end-footer">
      <h6 className="lh-lg m-0">
        Copyright &copy; 2022 Wazwork{" "}
        <img src={Logo} alt="logo" className="footer-logo mx-1" />
        All Rights Reserved
      </h6>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="bg-color pt-5">
      <div className="container mb-5">
        <div className="row mx-0">
          <Company />
          <ContactUs />
          <Subscribe />
        </div>
      </div>
      <CopyRights />
    </div>
  );
};

export default Footer;
