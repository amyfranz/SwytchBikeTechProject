import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Review({ review }) {
  return (
    <div className="review">
      <h3>{review.name}</h3>
      <p>
        <FontAwesomeIcon icon={faQuoteLeft} /> {review.review}{" "}
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>
    </div>
  );
}
