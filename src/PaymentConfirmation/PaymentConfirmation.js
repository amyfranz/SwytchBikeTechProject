import React from "react";
import ConfirmationPic from "../Assets/ConfirmationPic.jpg";
import "./PaymentConfirmation.css";

export default function PaymentConfirmation({ buyers }) {
  return (
    <div id="payment-confirmation" >
      <h2>Congratulations!</h2>
      <h4>You are buyer {buyers}</h4>
      <img src={ConfirmationPic} alt="bike" />
      <div className="sharebutton">
        <div
          className="fb-share-button"
          data-href="https://www.swytchbike.com/"
          data-layout="button"
          data-size="large"
        ></div>
        <a
          href="https://twitter.com/share?text=I%20just%20pre-ordered%20my%20swytch%20bike%20kit!"
          className="twitter-share-button"
          data-show-count="false"
          data-size="large"
        >
          Tweet
        </a>
      </div>
      <h4>You paid £399</h4>
      <h4>50% off the original price</h4>
      <div className="footer">
        <h4>Don‘t Miss Out On Our Newsletter</h4>
        <input type="text" placeholder="email" />
        <button>Sign Up</button>
        <h4>Stay Updated and Informed</h4>
      </div>
    </div>
  );
}
