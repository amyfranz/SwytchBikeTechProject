import React from "react";
import MoreInfoImg1 from "../Assets/MoreInfoImg1.jpg";
import MoreInfoImg2 from "../Assets/MoreInfoImg2.jpg";
import "./MoreInfo.css";

export default function MoreInfo() {
  return (
    <div id="moreinfo">
      <h2>More Information:</h2>
      <p>
        <b>Convert ANY bike</b> into an eBike with one of the world’s smallest
        and lightest eBike conversion kits.
      </p>
      <div className="moreinfo-moreinfo">
        <div className="moreinfo-about">
          <div className="moreinfo-about-writing">
            <p>
              <b>Easy to install</b> on most bikes including road bikes, hybrid
              bikes, MTBs, Fixies, Step-through bikes... and many more.
            </p>
            <ul>
              <li>Rim AND Disc brake compatible </li>
              <li>15 or 20 Mph Top Speed</li>
              <li>Up to 50km Range</li>
            </ul>
          </div>
          <div className="moreinfo-about-img">
            <img src={MoreInfoImg1} alt="" />
          </div>
        </div>
        <div className="moreinfo-features">
          <div className="moreinfo-features-writing">
            <h3>Features:</h3>
            <ul>
              <li>
                High Torque Brushless Motor:
                <br />
                <span>Conquer any hill</span>
              </li>
              <li>
                Lithium-Ion Power Pack:
                <br />
                <span>Long rides for a short charge </span>
              </li>
              <li>Compatible with any type of gearing</li>
            </ul>
          </div>
          <div className="moreinfo-features-img">
            <img src={MoreInfoImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
