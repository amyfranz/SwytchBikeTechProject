import React from "react";
import ShowPrice from "./ShowPrice";

export default function PaymentForm({ values, change, submit }) {
  const { name, email, cardNumber, expiryDate, cvv, cardHolder } = values;
  return (
    <form onSubmit={submit} className="paymentform">
      <div>
        <div className="inputdiv">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={change}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={change}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            name="cardNumber"
            type="number"
            min="1000000000000000"
            max="9999999999999999"
            placeholder="Card Number"
            value={parseInt(cardNumber)}
            onChange={change}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            name="expiryDate"
            type="month"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={change}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="cvv">CVV:</label>
          <input
            name="cvv"
            type="number"
            placeholder="CVV"
            min="100"
            max="999"
            value={cvv}
            onChange={change}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            name="cardHolder"
            type="text"
            placeholder="CardHolder"
            value={cardHolder}
            onChange={change}
            required
          />
        </div>
      </div>
      <div>
        <ShowPrice />
        <button type="submit">Pre Order</button>
      </div>
    </form>
  );
}
