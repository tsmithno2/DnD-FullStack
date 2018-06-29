import React, { Component } from "react";
import routes from "./router/routes";
import Header from "./components/Header/Header";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.location.pathname === "/" ? null : <Header />}

        <div>{routes}</div>
      </div>
    );
  }
}

export default withRouter(App);
