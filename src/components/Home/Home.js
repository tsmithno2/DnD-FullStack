import React, { Component } from "react";
import Header from "../Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <h1>Home</h1>

        <hr />
        <div>
          <h3>List of Campaigns</h3>
        </div>
      </div>
    );
  }
}
