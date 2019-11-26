import React from "react";
import classes from "./productDetails.module.css";
import axios from "axios";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      previewImage: "",
      thumbnails: [],
      data: [],
      imgPos: 0,
      cartCount: localStorage.getItem("cartCount")
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    if (
      productId !== undefined &&
      productId !== null &&
      productId !== "" &&
      parseInt(productId) > 0
    ) {
      axios
        .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
        .then(response => {
          this.setState({
            data: response.data,
            thumbnails: response.data.photos,
            previewImage: response.data.preview
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  onTumnailsClick = pos => {
    this.setState({ previewImage: this.state.data.photos[pos], imgPos: pos });
  };

  onAddtoCartClick = productData => {
    let cartvalue = parseInt(localStorage.getItem("cartCount"));
    cartvalue = cartvalue + 1;
    localStorage.setItem("cartCount", cartvalue);
    this.setState({ cartCount: cartvalue });
    this.addDataIntoLocalStorage(productData);
  };

  addDataIntoLocalStorage = () => {
    let myCartData;
    let productData = this.state.data;
    if (localStorage.getItem("productData") === null) {
      myCartData = [];
    } else {
      myCartData = JSON.parse(localStorage.getItem("productData"));
    }

    if (myCartData.length === 0) {
      var myObj = {
        id: productData.id,
        title: productData.name,
        count: 1,
        price: productData.price,
        preview: productData.preview
      };
      myCartData.push(myObj);
    } else if (myCartData.length !== 0) {
      let w = 0;

      for (let i = 0; i < myCartData.length; i++) {
        if (myCartData[i].id === productData.id) {
          myCartData[i].count = parseInt(myCartData[i].count) + 1;
          w += 1;
        }
      }
      if (w === 0) {
        myObj = {
          id: productData.id,
          title: productData.name,
          count: 1,
          price: productData.price,
          preview: productData.preview
        };
        myCartData.push(myObj);
      }
    }

    localStorage.setItem("productData", JSON.stringify(myCartData));
  };

  render() {
    const thumbnailsGrid = this.state.thumbnails.map((item, pos) => {
      const classArry = [classes.thumnails];
      if (pos === this.state.imgPos) classArry.push(classes.activeTumnails);
      return (
        <img
          key={pos}
          alt="thumnails 3"
          src={item}
          className={classArry.join(" ")}
          onClick={() => this.onTumnailsClick(pos)}
        />
      );
    });

    return (
      <div className={classes.productWrapper}>
        <div className={classes.productImage}>
          <img
            className={classes.previewImg}
            src={this.state.previewImage}
            alt="preview"
          />
        </div>

        <div className={classes.productDetails}>
          <h3 className={classes.productName}>{this.state.data.name}</h3>
          <p className={classes.productBrand}>{this.state.data.brand}</p>
          <p className={classes.price}>
            Price: Rs <span>{this.state.data.price}</span>
          </p>

          <h5 className={classes.productDiscriptionTitle}>Description</h5>
          <p className={classes.productDiscription}>
            <p>{this.state.data.description}</p>
          </p>

          <div className={classes.imgGrid}>{thumbnailsGrid}</div>

          <button
            className={classes.addToCartBtn}
            onClick={this.onAddtoCartClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
