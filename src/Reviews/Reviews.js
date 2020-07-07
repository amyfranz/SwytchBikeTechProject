import React, { Component } from "react";
import Data from "../Data/ReviewData";
import review1 from "../Assets/review1.png";
import review2 from "../Assets/review2.png";
import review3 from "../Assets/review3.png";
import "./Reviews.css";
import Review from "./Review";

export default class Reviews extends Component {
  componentDidMount() {
    console.log(this.props.i);
    this.interval = setInterval(() => {
      this.props.updateReviewNumber();
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div id="reviews">
        <Review review={Data[this.props.i]} />
        <a href="#preorder">
          <button>Pre Order Your swytch Kit</button>
        </a>
        <div className="reviewsites">
          <a href="https://www.swytchbike.com/electric-conversion-brompton-ludicrously-lightweight/">
            <img src={review1} alt="" />
          </a>
          <a href="https://www.reviews.co.uk/product-reviews/store/www-swytchbike-com/KIT-250W">
            <img src={review2} alt="" />
          </a>
          <a href="https://www.trustpilot.com/review/www.swytchbike.com">
            <img src={review3} alt="" />
          </a>
        </div>
      </div>
    );
  }
}
