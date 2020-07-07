import React from "react";
import HandleBar from "../Assets/Handlebar.gif";
import "./FrontPage.css";

export default function FrontPage() {
  return (
    <div id="frontpage">
      <img src={HandleBar} alt="Switch handlebar gif" />
      <div className="frontpage-writing">
        <h2 >More</h2>
        <h3>Than An</h3>
        <h1>Electric Bike</h1>
      </div>
    </div>
  );
}
