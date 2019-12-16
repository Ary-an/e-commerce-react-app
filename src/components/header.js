import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartValue: localStorage.getItem("cartCount")
    };
  }

  render() {
    if (this.state.cartValue === null) {
      localStorage.setItem("cartCount", "0");
      this.setState({ cartValue: localStorage.getItem("cartCount") });
    }

    return (
      <div className={classes.topbar}>
        <div className={classes.leftMenu}>
          <div className={classes.logo}>
            <a href="/">
              <span>Shop</span> Lane
            </a>
          </div>
          <a href="/"> Clothing </a>
          <a href="/"> Accessories </a>
        </div>

        <div className={classes.searchWrapper}>
          <i className="fas fa-search"></i>
          <input
            className="searchBox"
            type="text"
            name="search"
            placeholder="Search for Clothing and Accessories"
          />
        </div>

        <div className={classes.rightMenu}>
          <div className={classes.cartWrapper}>
            <Link to="/checkout">
              <i className="fas fa-shopping-cart"></i>
              <p className={classes.cartCount}>{this.state.cartValue}</p>
            </Link>
          </div>
          <img
            className={classes.profile}
            src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
            alt="profile pic"
          />
        </div>
      </div>
    );
  }
}

export default Header;
