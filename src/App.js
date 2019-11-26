import React from "react";
import Homepage from "./components/homepage";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductDetails from "./components/productDetails";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Checkout from "./components/checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/productDetails/:productId" component={ProductDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
