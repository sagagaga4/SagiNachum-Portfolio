  
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
      <div>
    <div className="footer">
      <p className="footer-info">
        I am currently looking for a job around Tel Aviv.</p>
        <p className="footer-info">
        If you think I can fit in your company, please contact me
    </p>
    <div className="footermail">
        <a href="sagagaga4@gmail.com">sagagaga4@gmail.com</a>
    </div>
    <div className="footernumb">
                <a href="tel:+972-50-9514-805">++972-50-9514-805</a>
    </div>

      </div>
    </div>
  );
};

export default Footer;