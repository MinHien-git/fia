import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="primary-footer">
      <div>
        <div className="main-footer">
          <div className="footer-company-content flex">
            <h2 className="logo">Fya</h2>
            <h3 className="text-color">FindAgencies</h3>
            <p className="text-color">
              our answer to the growing needs for a reliable, effective
              connection between SMEs/Startups and Agencies
            </p>
            <ul className="social-media-container flex">
              <li>
                <a href="./">
                  <img src="./icons8-facebook.svg" alt="facebook-icon" />
                </a>
              </li>
              <li>
                <a href="./">
                  <img src="./icons8-linkedin.svg" alt="facebook-icon" />
                </a>
              </li>
              <li>
                <a href="./">
                  <img src="./icons8-instagram.svg" alt="facebook-icon" />
                </a>
              </li>
              <li>
                <a href="./">
                  <img src="./icons8-telegram-app.svg" alt="facebook-icon" />
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer-link-container">
            <div className="grid footer-links">
              <h4>company</h4>
              <ul>
                <li>about</li>
                <li>contacts</li>
              </ul>
            </div>
            <div className="grid footer-links">
              <h4>brands</h4>
              <ul>
                <li>post project</li>
                <li>find agencies</li>
                <li>search</li>
              </ul>
            </div>
            <div className="grid footer-links">
              <h4>agencies</h4>
              <ul className="grid">
                <li>create profile</li>
                <li>learn more</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-color">
          2023 © fia - All rights reserved - Terms of Use - Privacy Policy
        </p>
      </div>
    </footer>
  );
}
