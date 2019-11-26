import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./homepage.module.css";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      previeImg: "",
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const cardList = this.state.data;

    const createClothingElement = cardList.map((item, pos) => {
      return item.isAccessory === false ? (
        <div className={classes.productCard} key={item.id}>
          <Link to={`/productDetails/${item.id}`}>
            <img
              className={classes.productImage}
              src={item.preview}
              alt={item.name}
            />
          </Link>
          <div className={classes.productMeta}>
            <h4>{item.name}</h4>
            <h5>{item.brand}</h5>
            <p> &#8377; {item.price}</p>
          </div>
        </div>
      ) : null;
    });

    const createAccessoryElements = cardList.map((item, pos) => {
      return item.isAccessory ? (
        <div className={classes.productCard} key={item.id}>
          <Link to={`/productDetails/${item.id}`}>
            <img
              className={classes.productImage}
              src={item.photos[0]}
              alt={item.name}
            />
          </Link>
          <div className={classes.productMeta}>
            <h4>{item.name}</h4>
            <h5>{item.brand}</h5>
            <p> &#8377; {item.price}</p>
          </div>
        </div>
      ) : null;
    });

    return (
      <div className={classes.conatiner}>
        <div className={classes.clothing}>
          <h3 className={classes.heading}>Clothing for Men and Women</h3>
          <div className={classes.productGrid}>
            {this.state.loading ? "Loading" : createClothingElement}
          </div>
        </div>

        <div className={classes.accessory}>
          <h3 className={classes.heading}>Accessories for Men and Women</h3>
          <div className={classes.productGrid}>
            {this.state.loading ? "Loading" : createAccessoryElements}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
