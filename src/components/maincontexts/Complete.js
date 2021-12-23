import React from "react";
import "./maincontexts.css";
import "../Main.css";
import { Link } from "react-router-dom";

import text1 from "./assets/text2.svg";

function Complete({ nickname }) {
  function randomNum(min, max) {
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
  }

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomS = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  const serialNum = randomNum(1000, 9999);

  return (
    <div className="main comp-back">
      <img src={text1} alt="text" style={{}} />
      <div className="serial-number">
        {nickname} ! The Serial Number of your Light is{" "}
        <span>
          {randomS}
          {serialNum}
        </span>{" "}
        Keep this number!
      </div>
      <Link to="/main" className="comp-home">
        Home
      </Link>
    </div>
  );
}

export default Complete;
