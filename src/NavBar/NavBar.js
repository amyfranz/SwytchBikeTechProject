import React from "react";
import Logo from "../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="navbar">
      <h5>GB</h5>
      <img src={Logo} alt="logo" />
      <div className="brand">
        <a
          href="https://www.facebook.com/swytchbike/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="font-awesome-icon" icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com/swytchbike/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="font-awesome-icon" icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/swytchbike/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="font-awesome-icon" icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
