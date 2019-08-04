import ReactDOM from "react-dom";
import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Nav from "./Nav";
import "./App.css";
import ItemPage from "./ItemPage/ItemPage";
import { items } from "./ItemPage/static-data";
import CartPage from "./CartPage/CartPage";

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  renderCart() {
    let itemCounts = this.state.cart.reduce((itemCounts, itemId));
  }
  handleAddtoCart = item => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  };

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddtoCart} />;
      case 1:
        return <span>Cart</span>;
    }
  }

  render() {
    return (
      <div className="App">
        <Nav
          activeTab={this.state.activeTab}
          onTabChange={this.handleTabChange}
        />
        <main className="App-contents">{this.renderContent()}</main>
      </div>
    );
  }
}

export default App;
