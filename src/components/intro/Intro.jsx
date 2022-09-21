import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/logo.png" alt="" />
          <h3>
          </h3>
          <div className="quoteContainer">
            <h3>I design and develop projects I love</h3>
          </div>
        </div>
      </div>

      <div className="right">
        <h1>
          <i class="fa-brands fa-github fa-6x"></i>
        </h1>
        <h2>
          <a href="https://github.com/Burakkonuk">REACH MY WORK</a>
        </h2>
      </div>
    </div>
  );
}
