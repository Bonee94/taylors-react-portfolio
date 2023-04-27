import React from "react";
import "../styles/Footer.css";
import LightDarkCandles from "./LightDarkCandles";

function Footer({ setAnimLight, animLight }) {
  let copy ='\u00a9';

  return (
    <footer>
      <div className="icons-container">
        <a
          key="icon1"
          href="https://www.linkedin.com/in/taylor-turner-44377426a/"
        >
            <i className="fa fa-linkedin"></i>
        </a>
        <a
          key="icon2"
          href="https://github.com/Bonee94"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          key="icon3"
          href="https://www.facebook.com/taylor.turner.94043"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <LightDarkCandles setAnimLight={setAnimLight} animLight={animLight}/>
      </div>
      <h3>{copy} Taylor Turner 2023 | All rights reserved</h3>
    </footer>
  );
}

export default Footer;
