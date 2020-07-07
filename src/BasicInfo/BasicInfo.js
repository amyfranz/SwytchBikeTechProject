import React from "react";
import PedalIcon from "../Assets/PedalIcon.png";
import MotorIcon from "../Assets/MotorIcon.png";
import DisplayIcon from "../Assets/DisplayIcon.png";
import BatteryIcon from "../Assets/BatteryIcon.png";
import "./BasicInfo.css";

export default function BasicInfo({ buyers }) {
  const purchases = buyers.toString().split("");
  return (
    <div id="basicinfo">
      <a href="#preorder">
        <button>Electrify your bike now</button>
      </a>
      <div className="basicinfo-main">
        <div className="basicinfo-heading">
          <h3>
            The <span>swytch</span> eBike Kit
          </h3>
          <h4>Convert your bike into an eBike</h4>
        </div>
        <div className="basicinfo-icons">
          <img src={DisplayIcon} alt="Display Icon" />
          <img src={BatteryIcon} alt="Battery Icon" />
          <img src={MotorIcon} alt="Motor Icon" />
          <img src={PedalIcon} alt="Pedal Icon" />
        </div>
      </div>
      <div className="basicinfo-buyers">
        <h5>
          <b>{purchases}</b> out of <b>3000</b> products have been brought
        </h5>
        <div className="basicinfo-buyers-amount">
          <div style={{ width: `${(buyers / 3000) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}
