import React, { Component } from "react";
import "./Login.css";
import Logo from "./dm_dash_logo_temp_for_real_final.png";

export default class Login extends Component {
  render() {
    return (
      <div className="LogInPage">
        <div className="DisplayInformation">
          <div>
            <h1 className="WebsiteTitle">Welcome to </h1>
          </div>

          <div className="LoginButton">
            <img className="Logo" src={Logo} alt="" height="400" />
            <div className="Description">
              <p className="WelcomeLine">Welcome to The Dm Dashboard!</p>
              <p className="DescriptionLine">
                This website is meant for dungeon or game managers to track
                their campaigns, characters in the campaign and quests.
              </p>
              <p className="LoginLine">
                Log in or register with your Google Account to get started!
              </p>
            </div>
            <a href={process.env.REACT_APP_LOGIN}>
              <button>Login or Register</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
