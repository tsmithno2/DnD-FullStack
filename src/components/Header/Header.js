import React, { Component } from "react";
import { getUser, displayCampaigns } from "../../dux/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let { username, user_avatar } = this.props.user;

    return (
      <div className="Header">
        {username ? (
          <div className="UserInfo">
            <img src={user_avatar} alt="" height="150" width="150" />
            <h3>Greetings {username}</h3>
          </div>
        ) : (
          <h3>Please login</h3>
        )}
        <div className="Buttons">
          <Link to="/home">
            <button>Home</button>
          </Link>

          <Link to="/newcampaign">
            <button>New Campaign</button>
          </Link>

          <a href={process.env.REACT_APP_LOGOUT}>
            <button>Log Out</button>
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { getUser, displayCampaigns }
)(Header);
