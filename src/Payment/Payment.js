import React, { Component } from "react";
import PaymentForm from "./PaymentForm";
import "./Payment.css";

export default class Payment extends Component {
  state = {
    name: "",
    email: "",
    cardNumber: 0,
    expiryDate: "",
    cvv: 0,
    cardHolder: "",
  };
  render() {
    return (
      <div id="preorder">
        <h2>Pre Order:</h2>
        <PaymentForm
          values={this.state}
          change={this.change}
          submit={this.submit}
        />
      </div>
    );
  }
  change = ({ target: { name, value } }) => {
    switch (name) {
      case "cardNumber":
        if (value < 10000000000000000) this.setState({ [name]: value });
        break;
      case "cvv":
        if (value < 1000) this.setState({ [name]: value });
        break;
      default:
        this.setState({ [name]: value });
    }
  };
  submit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.buyProduct();
    await this.setState({
      name: "",
      email: "",
      cardNumber: 0,
      expiryDate: "",
      cvv: 0,
      cardHolder: "",
    });
    this.props.history.push("/paymentconfirmation");
  };
}
