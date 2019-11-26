import React from "react";
import classes from "./checkout.module.css";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("productData")),
      cartCount: localStorage.getItem("cartCount")
    };
  }
  BackToDetails = id => {
    window.open(`productDetails/${id}`, "_self");
  };

  OnPlaceOrder = () => {
    alert("your order is booked");
    localStorage.clear();
    window.open("/", "_self");
  };

  render() {
    let myCartData = this.state.data;

    if (myCartData != null) {
      var productGrid = myCartData.map((item, pos) => {
        return (
          <div
            className={classes.productCard}
            key={pos}
            onClick={() => this.BackToDetails(item.id)}
          >
            <img src={item.preview} alt="" />
            <div className={classes.detail}>
              <h3>{item.title}</h3>
              <p>x{item.count}</p>
              <p>Amount: {item.price}</p>
              {/* {item.price * item.count} */}
            </div>
          </div>
        );
      });
    } else {
      myCartData = [];
    }

    var cost = 0;
    for (let i = 0; i < myCartData.length; i++) {
      cost += parseInt(myCartData[i].count) * parseInt(myCartData[i].price);
    }
    return (
      <div className={classes.container}>
        <h1>Checkout</h1>
        <p>Total items: {this.state.cartCount}</p>
        <div className={classes.productDetailsContainer}>
          <div className={classes.leftContainer}>{productGrid}</div>
          <div className={classes.rightContainer}>
            <div className={classes.totalAmount}>
              <h2>Total Amount</h2>
              <p>
                Total Amount: Rs <span>{cost}</span>
              </p>
              <Link to="/">
                <button onClick={this.OnPlaceOrder}>Place Order</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Checkout;
