import React from "react";
import "./VideoPlayer.css";

export default function VideoPlayer({ kits }) {
  return (
    <div id="videoplayer">
      <div className="video">
        <iframe
          title="This is a switch Bike"
          src="https://www.youtube.com/embed/RGCNW2KOtIE?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="kits-left">
        <h4>Only {kits} kits left!</h4>
        <a href="#preorder">
          <button>Want your own swytch kit?</button>
        </a>
      </div>
    </div>
  );
}
