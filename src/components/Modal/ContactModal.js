import React, { useRef } from "react";
import useOnClickOutside from "./useOnClickOutside";
import * as FaIcons from "react-icons/fa";

const ContactModal = ({ onClose }) => {
  const node = useRef();

  useOnClickOutside(node, onClose);
  return (
    <div className="on6" ref={node}>
      <div className="profileSec">
        <button className="profileSec__offClick6" onClick={onClose}>
          <FaIcons.FaTimes/>
        </button>
        <img
          className="profileSec__face"
          src={require("../../Images/part1.gif")}
        />
      </div>
      <div className="contactSec">
        <span className="contactSec__message">
          You can reach me at any of my socials below
        </span>
        <div className="contactSec__sButtons">
          <a href="https://github.com/Mike2081" target="_blank">
            <FaIcons.FaGithub className="contactSec__sButtons__sLogo" />
          </a>
          <a href="https://www.linkedin.com/in/michaeldoho/" target="_blank">
            <FaIcons.FaLinkedinIn className="contactSec__sButtons__sLogo" />
          </a>
          <a href="https://www.instagram.com/doh0/" target="_blank">
            <FaIcons.FaEnvelope className="contactSec__sButtons__sLogo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
