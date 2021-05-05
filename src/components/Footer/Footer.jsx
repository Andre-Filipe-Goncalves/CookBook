import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <IconContext.Provider value={{ size: "1.5rem", color: "black" }}>
          <Link to={{ pathname:"https://github.com/Andre-Filipe-Goncalves" }} target='_blank' className='social-icons'>
            <FaGithub />
          </Link>
          <Link to={{ pathname:"https://www.linkedin.com/in/andr%C3%A9-gon%C3%A7alves-085596203/" }} target='_blank' className='social-icons'>
            <FaLinkedin />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}