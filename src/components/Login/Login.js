import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <a href={process.env.REACT_APP_LOGIN}>
          <button>Login or Register</button>
        </a>
      </div>
    );
  }
}
