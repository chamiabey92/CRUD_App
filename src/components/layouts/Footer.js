import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-text-center">All Right Reserved &copy; Chamika</h1>
      <p className="text-center mt-6">
        <Link to="/">About</Link>|<Link to="/">Contact</Link>|
        <Link to="/">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;