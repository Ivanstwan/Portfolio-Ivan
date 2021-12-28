import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <i className="far fa-copyright" /> 2021 Ivan Setiawan.
        </div>
        <div className="footer-icons">
          <a
            className="fab fa-linkedin footer-icon"
            href="https://www.linkedin.com/in/ivanstwan/"
          ></a>
          <a
            className="fab fa-github footer-icon"
            href="https://github.com/Ivanstwan"
          ></a>
          {/* <i className="fas fa-arrow-up footer-icon"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
