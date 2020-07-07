import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import PaymentConfirmation from "./PaymentConfirmation/PaymentConfirmation";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Popup from "./Popup/Popup";

export default class App extends Component {
  state = {
    buyers: 2345,
    reviewNumber: 0,
    paymentConfirmation: true,
    blur: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ blur: true });
    }, 5000);
  }
  render() {
    const { buyers, reviewNumber, paymentConfirmation } = this.state;
    return (
      <div className="app">
        <NavBar />
        {this.state.blur && <Popup removeBlur={this.removeBlur} />}
        <Route
          exact
          path={`/`}
          render={(routerProps) => (
            <Dashboard
              {...routerProps}
              buyers={buyers}
              reviewNumber={reviewNumber}
              paymentConfirmation={paymentConfirmation}
              updateReviewNumber={this.updateReviewNumber}
              buyProduct={this.buyProduct}
              blur={this.state.blur}
            />
          )}
        />
        <Route
          exact
          path={`/paymentConfirmation`}
          render={(routerProps) => <PaymentConfirmation buyers={buyers} />}
        />
      </div>
    );
  }
  updateReviewNumber = () => {
    const { reviewNumber } = this.state;
    reviewNumber === 5
      ? this.setState({ reviewNumber: 0 })
      : this.setState({ reviewNumber: reviewNumber + 1 });
  };
  buyProduct = () => {
    this.setState({ buyers: this.state.buyers + 1 });
  };

  removeBlur = () => {
    this.setState({ blur: false });
  };
}
