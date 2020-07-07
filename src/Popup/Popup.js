import React from "react";
import "./Popup.css";

export default function Popup({ removeBlur }) {
  return (
    <div className="popup">
      <button className="close" onClick={removeBlur}>
        X
      </button>
      <h3>Pre order now to get 50% off!</h3>
      <a href="#preorder">
        <button className="ok" onClick={removeBlur}>
          Ok
        </button>
      </a>
    </div>
  );
}
